import React from 'react';
import BodySection from '../components/BodySection';

function Learning() {
    return (
        <>
            <BodySection
                title="Human Eye - Visual System"
                description={
                    <>
                        <h3>Overview</h3>

                        <p>
                            The human eye is a highly specialized sensory organ responsible for vision.
                            It detects light and converts it into electrical signals that are interpreted
                            by the brain, allowing perception of color, depth, motion, and spatial orientation.
                        </p>

                        <p>
                            Anatomically, the eye is a spherical structure approximately 24 mm in diameter,
                            located within the bony orbit of the skull. It is protected by the eyelids,
                            eyelashes, conjunctiva, and tear film.
                        </p>

                        <h4>Layers of the Eye</h4>
                        <ul>
                            <li>Outer Fibrous Layer – Sclera and Cornea</li>
                            <li>Middle Vascular Layer (Uvea) – Iris, Ciliary Body, Choroid</li>
                            <li>Inner Neural Layer – Retina</li>
                        </ul>

                        <p>
                            The cornea and lens act as refractive components, bending incoming light
                            rays so they focus precisely on the retina.
                        </p>

                        <h4>Photoreceptors</h4>
                        <ul>
                            <li>Rods – Responsible for vision in low-light conditions</li>
                            <li>Cones – Responsible for color vision and sharp visual acuity</li>
                        </ul>

                        <p>
                            The highest concentration of cones is found in the fovea centralis within
                            the macula, which provides sharp central vision.
                        </p>

                        <p>
                            The eye maintains intraocular pressure (IOP) through balanced production
                            and drainage of aqueous humor. Proper regulation of this pressure is
                            essential to prevent conditions such as glaucoma.
                        </p>

                        <p>
                            Light energy is converted into electrical impulses through a process called
                            phototransduction. These impulses travel via the optic nerve to the visual
                            cortex in the occipital lobe of the brain, where they are interpreted as vision.
                        </p>

                        <h3>Functions</h3>
                        <ul>
                            <li>Allows perception of light</li>
                            <li>Enables color vision</li>
                            <li>Provides depth perception</li>
                            <li>Maintains focus through accommodation</li>
                            <li>Regulates light entry through pupil control</li>
                            <li>Converts light into nerve impulses</li>
                            <li>Supports protective reflexes (blink and pupillary reflex)</li>
                        </ul>
                    </>
                }
                diagramUrl="/eye.jpg"
                arImageUrl="/eyeqr.png"
            />


            {/* Additional sections can be added easily */}
            <div className="section-divider" />

            <BodySection
                title="Human Heart - Cardiovascular System"
                description={
                    <>
                        <h3>Overview</h3>

                        <p>
                            The human heart is a muscular, hollow organ that functions as the central
                            pump of the cardiovascular system. It maintains continuous blood circulation
                            throughout the body, delivering oxygen and nutrients to tissues while
                            removing metabolic waste products such as carbon dioxide.
                        </p>

                        <p>
                            Anatomically, the heart is located in the mediastinum between the lungs,
                            slightly tilted toward the left side of the chest. It is approximately
                            the size of a closed fist and is enclosed within a protective sac
                            called the pericardium.
                        </p>

                        <h4>Chambers of the Heart</h4>
                        <ul>
                            <li>Right Atrium</li>
                            <li>Right Ventricle</li>
                            <li>Left Atrium</li>
                            <li>Left Ventricle</li>
                        </ul>

                        <p>
                            The right side of the heart pumps deoxygenated blood to the lungs through
                            pulmonary circulation, while the left side pumps oxygenated blood to the
                            entire body through systemic circulation.
                        </p>

                        <h4>Layers of the Heart Wall</h4>
                        <ul>
                            <li>Epicardium (outer layer)</li>
                            <li>Myocardium (muscular middle layer)</li>
                            <li>Endocardium (inner lining)</li>
                        </ul>

                        <h4>Heart Valves</h4>
                        <ul>
                            <li>Tricuspid Valve</li>
                            <li>Pulmonary Valve</li>
                            <li>Mitral (Bicuspid) Valve</li>
                            <li>Aortic Valve</li>
                        </ul>

                        <p>
                            The rhythmic contraction of the heart is controlled by the cardiac
                            conduction system. Electrical impulses originate from the sinoatrial (SA)
                            node, pass through the atrioventricular (AV) node, Bundle of His, and
                            Purkinje fibers to coordinate heartbeat.
                        </p>

                        <p>
                            The heart receives its own blood supply through the coronary arteries.
                            Blockage of these arteries can lead to myocardial infarction (heart attack).
                        </p>

                        <h3>Functions</h3>
                        <ul>
                            <li>Pumps oxygenated blood to the body</li>
                            <li>Pumps deoxygenated blood to the lungs</li>
                            <li>Maintains blood pressure</li>
                            <li>Ensures continuous circulation</li>
                            <li>Supplies nutrients and oxygen to tissues</li>
                            <li>Removes metabolic waste products</li>
                        </ul>
                    </>
                }
                diagramUrl="/heart.png"
                arImageUrl="/heart.png"
            />
            <div className="section-divider" />

            <BodySection
                title="Lungs - Respiratory System"
                description={
                    <>
                        <h3>Overview</h3>
                        <p>
                            The lungs are paired respiratory organs located in the thoracic cavity,
                            protected by the rib cage and separated from the abdominal cavity by
                            the diaphragm. They are the primary organs of the respiratory system
                            and are responsible for the exchange of gases between the external
                            environment and the bloodstream.
                        </p>

                        <p>
                            Air enters through the nasal cavity, passes through the pharynx,
                            larynx, and trachea, and then moves into the right and left bronchi.
                            These bronchi divide into smaller bronchioles that end in microscopic
                            air sacs called alveoli. The alveoli are the functional units of the
                            lungs and provide a large surface area for efficient gas exchange.
                        </p>

                        <p>
                            Each lung is covered by a double-layered membrane called the pleura,
                            which reduces friction during breathing movements. The right lung
                            consists of three lobes (superior, middle, and inferior), while the
                            left lung has two lobes to accommodate the heart.
                        </p>

                        <p>
                            Gas exchange occurs through diffusion. Oxygen moves from the alveoli
                            into surrounding capillaries, while carbon dioxide moves from the
                            bloodstream into the alveoli to be exhaled. This process helps maintain
                            proper oxygen levels and regulates blood pH.
                        </p>

                        <p>
                            Breathing is facilitated by the diaphragm and intercostal muscles.
                            During inhalation, the diaphragm contracts and moves downward,
                            increasing thoracic volume and allowing air to enter the lungs.
                            During exhalation, the diaphragm relaxes, decreasing thoracic volume
                            and pushing air out.
                        </p>

                        <h3>Functions</h3>
                        <ul>
                            <li>Oxygenates the blood</li>
                            <li>Removes carbon dioxide</li>
                            <li>Maintains acid-base balance</li>
                            <li>Supports speech production</li>
                            <li>Provides immune defense</li>
                            <li>Filters small blood clots and air bubbles</li>
                            <li>Helps regulate body temperature</li>
                        </ul>
                    </>
                }
                diagramUrl="/lungs.png"
                arImageUrl="/heart.jpg"
            />
            <div className="section-divider" />

            <BodySection
                title="Intestine - Digestive System"
                description={
                    <>
                        <h3>Overview</h3>

                        <p>
                            The intestine is a long, tubular organ of the digestive system responsible
                            for digestion and absorption of nutrients. It extends from the stomach to
                            the anus and is divided into two major parts: the small intestine and the
                            large intestine.
                        </p>

                        <p>
                            The small intestine is approximately 6 meters long and is the primary
                            site of digestion and nutrient absorption. It consists of three parts:
                            duodenum, jejunum, and ileum. Digestive enzymes from the pancreas and bile
                            from the liver act in the small intestine to break down carbohydrates,
                            proteins, and fats.
                        </p>

                        <p>
                            The inner lining of the small intestine contains finger-like projections
                            called villi and microvilli, which greatly increase the surface area for
                            absorption of nutrients into the bloodstream.
                        </p>

                        <p>
                            The large intestine is shorter but wider and includes the cecum, colon,
                            rectum, and anal canal. Its primary role is to absorb water and electrolytes
                            from undigested food and form feces for elimination.
                        </p>

                        <p>
                            The intestine also contains beneficial gut bacteria that assist in digestion,
                            vitamin production (such as vitamin K), and immune system support.
                        </p>

                        <h3>Functions</h3>
                        <ul>
                            <li>Completes digestion of food</li>
                            <li>Absorbs nutrients into the bloodstream</li>
                            <li>Absorbs water and electrolytes</li>
                            <li>Forms and eliminates feces</li>
                            <li>Supports immune defense (gut-associated lymphoid tissue)</li>
                            <li>Hosts beneficial gut microbiota</li>
                        </ul>
                    </>
                }
                diagramUrl="/intestine.jpeg"
                arImageUrl="/intestine_qr.png"
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
