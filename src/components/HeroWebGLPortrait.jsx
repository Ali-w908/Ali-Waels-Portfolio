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
      gl_Position = vec4(position.xy, 0.0, 1.0);
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

      // Only foreground (depth > 0.5) moves with the mouse.
      // Background pixels stay completely fixed — no ghost, no gap.
      // We remap depth from [0.5, 1.0] → [0.0, 1.0] so only foreground layers shift.
      float foregroundStrength = max(0.0, (depth - 0.5) * 2.0);

      // Intensity 0.03 — subtle but perceptible 3D feel
      vec2 offset = uMouse * (foregroundStrength * 0.03);

      // Clamp UV so we never sample outside the texture (prevents edge black lines)
      vec2 shiftedUv = clamp(vUv + offset, 0.001, 0.999);

      vec4 color = texture2D(uImage, shiftedUv);
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

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
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
