import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BodySection from '../components/BodySection';

function Learning() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                // Smooth scroll after a short delay to ensure rendering is complete
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <>
            <BodySection
                id="eye"
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
                id="heart"
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
                arImageUrl="/heart_qrr.jpeg"
            />
            <div className="section-divider" />

            <BodySection
                id="lungs"
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
                arImageUrl="/eyeqr.png"
            />
            <div className="section-divider" />

            <BodySection
                id="digestive"
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
                id="kidney"
                title="Kidney - Urinary System"
                description={
                    <>
                        <h3>Overview</h3>

                        <p>
                            The kidneys are two bean-shaped organs located in the posterior abdominal
                            cavity on either side of the vertebral column. They are vital components
                            of the urinary system and are primarily responsible for filtering blood,
                            removing metabolic waste, and maintaining fluid and electrolyte balance.
                        </p>

                        <p>
                            Each kidney contains approximately one million functional units called
                            nephrons. Nephrons filter blood to remove waste products such as urea,
                            creatinine, and excess salts, forming urine in the process.
                        </p>

                        <p>
                            The kidney is divided into three main regions: the renal cortex,
                            renal medulla, and renal pelvis. Blood enters the kidney through the
                            renal artery and leaves through the renal vein after filtration.
                            The produced urine flows from the kidneys through the ureters to
                            the urinary bladder for storage.
                        </p>

                        <p>
                            In addition to waste removal, the kidneys play an essential role in
                            regulating blood pressure, maintaining acid–base balance, and
                            producing important hormones such as erythropoietin (which stimulates
                            red blood cell production) and renin (which helps regulate blood pressure).
                        </p>

                        <h3>Functions</h3>
                        <ul>
                            <li>Filters blood to remove metabolic waste</li>
                            <li>Forms and excretes urine</li>
                            <li>Maintains fluid and electrolyte balance</li>
                            <li>Regulates blood pressure</li>
                            <li>Maintains acid–base balance (pH control)</li>
                            <li>Produces hormones (erythropoietin and renin)</li>
                            <li>Regulates red blood cell production</li>
                        </ul>
                    </>
                }
                diagramUrl="/kidney.png"
                arImageUrl="/kidney_qr.png"
            />
            <div className="section-divider" />

            <BodySection
                id="brain"
                title="Brain - Nervous System"
                description={
                    <>
                        <h3>Overview</h3>

                        <p>
                            The brain is the central organ of the nervous system and serves as the
                            control center of the human body. It is responsible for processing
                            sensory information, regulating bodily functions, and enabling higher
                            cognitive abilities such as thinking, memory, learning, and decision-making.
                        </p>

                        <p>
                            The brain is located within the cranial cavity and is protected by the
                            skull, meninges, and cerebrospinal fluid (CSF). It weighs approximately
                            1.3 to 1.5 kilograms in adults and contains billions of neurons that
                            communicate through electrical and chemical signals.
                        </p>

                        <h4>Main Parts of the Brain</h4>
                        <ul>
                            <li>Cerebrum – Responsible for thinking, memory, voluntary movement, and sensory processing</li>
                            <li>Cerebellum – Coordinates balance, posture, and fine motor control</li>
                            <li>Brainstem – Controls vital functions such as breathing, heart rate, and blood pressure</li>
                        </ul>

                        <p>
                            The cerebrum is divided into two hemispheres and four lobes:
                            frontal, parietal, temporal, and occipital. Each lobe performs
                            specialized functions such as motor control, sensation, language,
                            and vision.
                        </p>

                        <p>
                            The brain communicates with the rest of the body through the spinal cord
                            and peripheral nerves. It continuously processes incoming sensory signals
                            and generates appropriate responses.
                        </p>

                        <h3>Functions</h3>
                        <ul>
                            <li>Controls voluntary and involuntary body movements</li>
                            <li>Processes sensory information (vision, hearing, touch, taste, smell)</li>
                            <li>Regulates breathing and heart rate</li>
                            <li>Enables thinking, reasoning, and decision-making</li>
                            <li>Stores memory and supports learning</li>
                            <li>Maintains balance and coordination</li>
                            <li>Regulates emotions and behavior</li>
                        </ul>
                    </>
                }
                diagramUrl="/brain.png"
                arImageUrl="/brain_qr.png"
            />
            <div className="section-divider" />

            <BodySection
                id="liver"
                title="Liver - Digestive System"
                description={
                    <>
                        <h3>Overview</h3>

                        <p>
                            The liver is the largest internal organ and one of the most vital organs
                            in the human body. It is located in the upper right quadrant of the
                            abdominal cavity, just below the diaphragm. The liver plays a central
                            role in metabolism, detoxification, digestion, and nutrient storage.
                        </p>

                        <p>
                            The liver is divided into right and left lobes and is composed of
                            functional units called lobules. It receives blood from two major
                            sources: the hepatic artery (oxygenated blood) and the portal vein
                            (nutrient-rich blood from the digestive tract).
                        </p>

                        <p>
                            One of the liver’s key functions is the production of bile, a substance
                            that helps in the digestion and absorption of fats in the small intestine.
                            The liver also processes carbohydrates, proteins, and lipids, converting
                            them into usable forms for the body.
                        </p>

                        <p>
                            In addition, the liver detoxifies harmful substances, metabolizes drugs,
                            stores vitamins (A, D, E, K, and B12), and regulates blood glucose levels
                            by storing and releasing glycogen as needed.
                        </p>

                        <h3>Functions</h3>
                        <ul>
                            <li>Produces bile for fat digestion</li>
                            <li>Detoxifies harmful substances and drugs</li>
                            <li>Regulates blood glucose levels</li>
                            <li>Stores vitamins and minerals</li>
                            <li>Metabolizes carbohydrates, proteins, and fats</li>
                            <li>Produces important plasma proteins (e.g., albumin)</li>
                            <li>Breaks down old red blood cells</li>
                            <li>Supports immune function</li>
                        </ul>
                    </>
                }
                diagramUrl="/liver.png"
                arImageUrl="/liver_qr.png"
            />
            <div className="section-divider" />

            <BodySection
                id="pancreas"
                title="Pancreas - Digestive & Endocrine System"
                description={
                    <>
                        <h3>The Pancreas</h3>

                        <p>
                            The pancreas is a soft, elongated gland located behind the stomach in the
                            upper abdomen. It plays a dual role in the body by functioning as both an
                            exocrine gland (digestive system) and an endocrine gland (hormonal system).
                        </p>

                        <p>
                            The pancreas is divided into three main parts: the head, body, and tail.
                            It is closely associated with the duodenum (first part of the small intestine).
                        </p>

                        <h3>Digestive (Exocrine) Function</h3>

                        <p>
                            The pancreas produces pancreatic juice containing digestive enzymes such as:
                        </p>

                        <ul>
                            <li>Amylase – breaks down carbohydrates</li>
                            <li>Lipase – breaks down fats</li>
                            <li>Proteases (trypsin, chymotrypsin) – break down proteins</li>
                        </ul>

                        <p>
                            These enzymes are released into the duodenum through the pancreatic duct
                            and help in the chemical digestion of food.
                        </p>

                        <h3>Hormonal (Endocrine) Function</h3>

                        <p>
                            The pancreas contains clusters of cells called the Islets of Langerhans,
                            which secrete important hormones directly into the bloodstream.
                        </p>

                        <ul>
                            <li>Insulin – lowers blood glucose levels</li>
                            <li>Glucagon – increases blood glucose levels</li>
                            <li>Somatostatin – regulates other hormones</li>
                        </ul>

                        <p>
                            By regulating blood sugar levels, the pancreas plays a crucial role in
                            maintaining metabolic balance and energy supply in the body.
                        </p>

                        <h3>Functions</h3>

                        <ul>
                            <li>Produces digestive enzymes</li>
                            <li>Regulates blood sugar levels</li>
                            <li>Maintains glucose homeostasis</li>
                            <li>Supports digestion in the small intestine</li>
                            <li>Secretes important metabolic hormones</li>
                        </ul>
                    </>
                }
                diagramUrl="/pancrease.png"
                arImageUrl="/pancreas_qr.png"
            />

            <div className="section-divider" />

            <BodySection
                id="stomach"
                title="Stomach - Digestive System"
                description={
                    <>
                        <h3>The Stomach</h3>

                        <p>
                            The stomach is a muscular, J-shaped organ located in the upper left part
                            of the abdominal cavity, between the esophagus and the small intestine.
                            It plays a major role in the mechanical and chemical digestion of food.
                        </p>

                        <p>
                            The stomach temporarily stores food after swallowing and mixes it with
                            gastric juices to form a semi-liquid substance called chyme. It acts as
                            a bridge between the esophagus and the duodenum (first part of the small intestine).
                        </p>

                        <h3>Structure</h3>

                        <p>
                            The stomach is divided into four main regions:
                        </p>

                        <ul>
                            <li>Cardia – receives food from the esophagus</li>
                            <li>Fundus – upper curved portion</li>
                            <li>Body – main central region</li>
                            <li>Pylorus – connects to the small intestine</li>
                        </ul>

                        <p>
                            The inner lining of the stomach contains gastric glands that produce
                            hydrochloric acid (HCl), mucus, and digestive enzymes such as pepsin.
                        </p>

                        <h3>Functions</h3>

                        <ul>
                            <li>Stores food temporarily</li>
                            <li>Performs mechanical digestion by muscular contractions</li>
                            <li>Secretes hydrochloric acid to kill harmful bacteria</li>
                            <li>Breaks down proteins using the enzyme pepsin</li>
                            <li>Converts food into chyme for further digestion</li>
                            <li>Regulates the release of food into the small intestine</li>
                        </ul>

                        <p>
                            The stomach protects itself from acid damage by secreting mucus,
                            which forms a protective barrier on its inner lining.
                        </p>
                    </>
                }
                diagramUrl="/stomach.png"
                arImageUrl="/stomach_qr.png"
            />
        </>
    );
}

export default Learning;
