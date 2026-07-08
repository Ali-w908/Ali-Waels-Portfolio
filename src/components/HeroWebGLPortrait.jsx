"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function PortraitShaderMaterial({ imageTex, depthTex }) {
  const materialRef = useRef();
  const { size } = useThree();

  // Mouse state
  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetMouse = useRef(new THREE.Vector2(0, 0));

  // Listen to global mouse move to drive the parallax
  useMemo(() => {
    if (typeof window !== "undefined") {
      const onMouseMove = (e) => {
        targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    }
  }, []);

  useFrame((state, delta) => {
    // Smoothly interpolate mouse position
    mouse.current.lerp(targetMouse.current, delta * 5.0);
    
    if (materialRef.current) {
      materialRef.current.uniforms.uMouse.value = mouse.current;
      // Adjust aspect ratio uniformly
      materialRef.current.uniforms.uAspect.value = size.width / size.height;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D uImage;
    uniform sampler2D uDepth;
    uniform vec2 uMouse;
    uniform float uAspect;
    varying vec2 vUv;

    void main() {
      // Sample the depth map
      float depth = texture2D(uDepth, vUv).r;
      
      // Calculate offset based on mouse position and depth
      // By using (depth - 0.5), we establish a focal plane in the middle.
      // The foreground (depth=1) moves one way, and the background (depth=0) moves the other.
      // This halves the absolute displacement per pixel, drastically reducing ghosting/clipping artifacts.
      vec2 offset = uMouse * ((depth - 0.5) * 0.04);
      
      // Sample the main image with the offset UV
      vec4 color = texture2D(uImage, vUv + offset);
      
      gl_FragColor = color;
    }
  `;

  const uniforms = useMemo(
    () => ({
      uImage: { value: imageTex },
      uDepth: { value: depthTex },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAspect: { value: 1.0 },
    }),
    [imageTex, depthTex]
  );

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  );
}

function Scene() {
  const [imageTex, depthTex] = useTexture([
    "/media/portrait4.jpeg",
    "/media/depth-map.png"
  ]);
  const { viewport } = useThree();

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <PortraitShaderMaterial imageTex={imageTex} depthTex={depthTex} />
    </mesh>
  );
}

import { Suspense } from 'react';

export default function HeroWebGLPortrait() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
