"use client";

import React, { useEffect, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import { skillGroups } from "@/data";
import * as THREE from "three";

const SkillConstellation3D = () => {
  const fgRef = useRef(null);

  const nodes = [];
  const links = [];

  skillGroups.forEach((group, groupIdx) => {
    const groupId = `group-${groupIdx}`;
    nodes.push({ id: groupId, name: group.title, val: 4, group: group.title });

    group.skills.forEach((skill, skillIdx) => {
      const skillId = `skill-${groupIdx}-${skillIdx}`;
      nodes.push({ id: skillId, name: skill.name, val: 1.5, group: group.title });
      links.push({ source: groupId, target: skillId });
    });
  });

  const data = { nodes, links };

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("charge").strength(-100);
    }
  }, []);

  return (
    <div className="w-full h-[80vh]">
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        backgroundColor="#0b0b2a"
        nodeAutoColorBy="group"
        nodeThreeObject={({ id, name, group, val }) => {
          const sprite = new THREE.Sprite(
            new THREE.SpriteMaterial({
              map: createTextTexture(name),
              transparent: true,
            })
          );
          sprite.scale.set(10, 5, 1);
          return sprite;
        }}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={d => Math.random() * 0.005 + 0.002}
        linkColor={() => "rgba(255,255,255,0.2)"}
        linkWidth={1.2}
      />
    </div>
  );
};

// Helper: Create canvas texture from text
const createTextTexture = (text: string) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  ctx.font = "500 24px Arial";
  const width = ctx.measureText(text).width + 20;
  canvas.width = width;
  canvas.height = 40;
  ctx.font = "500 24px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "#a855f7";
  ctx.shadowBlur = 12;
  ctx.fillText(text, 10, 28);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

export default SkillConstellation3D;