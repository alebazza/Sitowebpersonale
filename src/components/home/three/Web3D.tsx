import { Center, Sparkles, Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const FONT_URL = "/fonts/helvetiker_bold.typeface.json";

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */
function gradientTexture(stops: Array<[number, string]>) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const ctx = c.getContext("2d");
  if (!ctx) return null;
  const g = ctx.createLinearGradient(0, 0, 512, 0);
  for (const [p, col] of stops) g.addColorStop(p, col);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 128);
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

/* ------------------------------------------------------------------ */
/* the word + halo rings                                               */
/* ------------------------------------------------------------------ */
function Word({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  const tex = useMemo(() => gradientTexture([[0, "#B600A8"], [0.5, "#7621B0"], [1, "#BE4C00"]]), []);

  const ringMat1 = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#bf5af2",
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );
  const ringMat2 = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#e07b39",
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame((state, delta) => {
    const g = group.current;
    if (!g || reduced) return;
    const t = state.clock.elapsedTime;
    g.rotation.y += delta * 0.5;
    g.position.y = Math.sin(t * 0.8) * 0.07;
    if (ring1.current) ring1.current.rotation.z += delta * 0.35;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.22;
  });

  return (
    <group>
      <group ref={group} position={[0, -0.1, 0]} rotation={[0.12, 0, 0]}>
        <Center>
          <Text3D
            font={FONT_URL}
            size={1.05}
            height={0.3}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelSegments={4}
            curveSegments={8}
            letterSpacing={0.14}
          >
            WEB
            <meshStandardMaterial
              color="#ffffff"
              map={tex}
              metalness={0.4}
              roughness={0.28}
              emissive="#ffffff"
              emissiveMap={tex}
              emissiveIntensity={0.55}
            />
          </Text3D>
        </Center>
      </group>

      <mesh ref={ring1} material={ringMat1} rotation={[0.65, 0, 0]}>
        <torusGeometry args={[1.62, 0.022, 12, 96]} />
      </mesh>
      <mesh ref={ring2} material={ringMat2} rotation={[0.55, 0.35, 0]}>
        <torusGeometry args={[1.8, 0.016, 12, 96]} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* soft magenta glow behind                                            */
/* ------------------------------------------------------------------ */
function Glow() {
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(182,0,168,0.38)");
    g.addColorStop(0.45, "rgba(118,33,176,0.14)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c);
    t.needsUpdate = true;
    return t;
  }, []);

  if (!tex) return null;
  return (
    <mesh position={[0, 0, -1.7]}>
      <planeGeometry args={[7, 7]} />
      <meshBasicMaterial map={tex} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/* main                                                                */
/* ------------------------------------------------------------------ */
export default function Web3D({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, -0.05, 5.3], fov: 34 }}
      style={{ background: "transparent" }}
    >
      <Glow />
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} color="#fff1df" />
      <directionalLight position={[-5, 2.5, -4]} intensity={1.6} color="#d9b3ff" />
      <directionalLight position={[4, -3, -3]} intensity={0.6} color="#ffd9a8" />
      {!reduced && (
        <>
          <Sparkles count={55} scale={[6, 4, 3]} size={2} speed={0.35} opacity={0.45} color="#bf5af2" position={[0, 0.2, -0.5]} />
          <Sparkles count={30} scale={[5, 3, 2]} size={1.5} speed={0.25} opacity={0.3} color="#e07b39" position={[0, -0.2, -0.8]} />
        </>
      )}
      <Word reduced={reduced} />
    </Canvas>
  );
}
