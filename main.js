
//   import * as THREE from 'three';

//   const scene = new THREE.Scene();
//   console.log(scene);
const THREE = window.MINDAR.IMAGE.THREE;
document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {
        debugger;
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({ container: document.body, imageTargetSrc: './assets/windowM.mind' });
        const { renderer, scene, camera } = mindarThree;
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });

        const plane = new THREE.Mesh(geometry, material);
        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane);
        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera)
        });
    }
    start();
})
