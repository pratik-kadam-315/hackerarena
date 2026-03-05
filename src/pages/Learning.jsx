import React from 'react';
import BodySection from '../components/BodySection';

function Learning() {
    return (
        <>
            <BodySection
                title="Human Heart - Cardiovascular System"
                description={
                    <>
                        <h3>Overview</h3>
                        <p>The human eye is a highly specialized sensory organ that enables the sense of vision. It is responsible for detecting light, focusing visual images, and converting light energy into electrical signals that are interpreted by the brain. Vision is one of the most complex and important sensory functions in the human body, allowing individuals to perceive color, depth, motion, and spatial orientation.

                            Anatomically, the eye is a spherical structure approximately 24 mm in diameter, situated within the bony orbit of the skull. It is protected by the eyelids, eyelashes, conjunctiva, and tear film. The eyeball is composed of three primary layers: the outer fibrous layer (sclera and cornea), the middle vascular layer or uvea (iris, ciliary body, and choroid), and the inner neural layer (retina). Each layer plays a critical role in maintaining vision and ocular health.

                            The cornea and lens function together as refractive components of the eye, bending incoming light rays to focus them precisely onto the retina. The retina contains specialized photoreceptor cells known as rods and cones. Rods are responsible for vision in low-light conditions (scotopic vision), while cones enable color perception and high visual acuity (photopic vision). The highest concentration of cones is found in the fovea centralis, a small depression within the macula responsible for sharp central vision.The eye also maintains internal pressure, known as intraocular pressure (IOP), through the balanced production and drainage of aqueous humor. Proper regulation of this pressure is essential to prevent conditions such as glaucoma.

                            Once light is converted into electrical impulses through a process called phototransduction, these signals travel via the optic nerve to the visual cortex in the occipital lobe of the brain. The brain then processes and interprets the signals to create meaningful visual perception.

                            In addition to image formation, the eye supports protective and adaptive mechanisms such as the pupillary light reflex, accommodation for near and distant vision, and tear production to maintain surface lubrication.

                            The human visual system works in coordination with ocular muscles, neural pathways, and cortical processing centers, making it one of the most sophisticated sensory systems in the body.</p>
                        <h3>Functions</h3>
                        <ul>
                            <li>Detects light and converts it into electrical signals</li>
                            <li>Focuses light onto the retina</li>
                            <li>Transmits visual information to the brain</li>
                        </ul>
                    </>
                }
                diagramUrl="/eye.jpg"
                arImageUrl="/eyeqr.png"
            />


            {/* Additional sections can be added easily */}
            <div className="section-divider" />

            <BodySection
                title="Lungs - Respiratory System"
                description={
                    <>
                        <h3>The Lungs</h3>
                        <p>The lungs are the primary organs of the respiratory system in humans and most other animals. They are located in the chest on either side of the heart. Their main function is the process of gas exchange called respiration (or breathing). In respiration, oxygen from the incoming air enters the blood, and carbon dioxide, a waste gas from the metabolism, leaves the blood.</p>
                        <p>Their principal function is to transport oxygen from the atmosphere into the bloodstream, and to release carbon dioxide from the bloodstream into the atmosphere.</p>
                    </>
                }
                diagramUrl="/heart.jpg"
                arImageUrl="/heart.jpg"
            />
            <div className="section-divider" />

            <BodySection
                title="Lungs - Respiratory System"
                description={
                    <>
                        <h3>The Lungs</h3>
                        <p>The heart is a muscular organ found in humans and other animals. This organ pumps blood through the blood vessels.[1] The heart and blood vessels together make up the circulatory system.[2] The pumped blood carries oxygen and nutrients to the tissue, while carrying metabolic waste such as carbon dioxide to the lungs.[3] In humans, the heart is approximately the size of a closed fist and is located between the lungs, in the middle compartment of the chest, called the mediastinum.[4] In humans, the heart is divided into four chambers: upper left and right atria and lower left and right ventricles.[5][6] Commonly, the right atrium and ventricle are referred together as the right heart and their left counterparts as the left heart.[7] In a healthy heart, blood flows one way through the heart due to heart valves, which prevent backflow.[4] The heart is enclosed in a protective sac, the pericardium, which also contains a small amount of fluid. The wall of the heart is made up of three layers: epicardium, myocardium, and endocardium.[8] The heart pumps blood with a rhythm determined by a group of pacemaker cells in the sinoatrial node. These generate an electric current that causes the heart to contract, traveling through the atrioventricular node and along the conduction system of the heart. In humans, deoxygenated blood enters the heart through the right atrium from the superior and inferior venae cavae and passes to the right ventricle. From here, it is pumped into pulmonary circulation to the lungs, where it receives oxygen and gives off carbon dioxide. Oxygenated blood then returns to the left atrium, passes through the left ventricle and is pumped out through the aorta into systemic circulation, traveling through arteries, arterioles, and capillaries—where nutrients and other substances are exchanged between blood vessels and cells, losing oxygen and gaining carbon dioxide—before being returned to the heart through venules and veins.[9] The adult heart beats at a resting rate close to 72 beats per minute.[10]</p>
                        <p>Their principal function is to transport oxygen from the atmosphere into the bloodstream, and to release carbon dioxide from the bloodstream into the atmosphere.</p>
                    </>
                }
                diagramUrl="/heart.jpg"
                arImageUrl="/heart.jpg"
            />
        </>
    );
}

export default Learning;
