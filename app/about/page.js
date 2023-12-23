import styles from '../page.module.css'
import { pacifico } from '../layout'
import goldfish from '../Resources/Images/goldfish2.png'
import Image from 'next/image'


export default function About () {
    return (
        <div className={styles.about}>
            <section className={styles.aboutHeader}>
            <h1>About Us</h1>
            <p>Skoolz of Fish is a premier store for exotic freshwater fish. We are passionate about fish and committed to their conservation.</p>
            </section>
            <Image
            src={goldfish}
            width={800}
            height={800}
            alt="a tank of goldfish"
            className={styles.goldfish}
            />
            <section className={styles.mission}>
                <h3 className={pacifico.className}>Our Mission</h3>
                <p>
                Our mission here at Skoolz of Fish is to not just provide top-notch aquarium services but also to teach conservation.
                We've always been enamored with wildlife and dove headfirst into the aquarist hobby. 
                We want to promote the wonders of keeping a beautiful thriving aquarium, but also teach the importance of cherishing these live specimens all around the world.
                </p>
            </section>
            <section className={styles.whoWeAre}>
                <h3 className={pacifico.className}>Who we are</h3>
                <p>
                Skoolz of Fish was brought to fruition by its founder Rama Sabbakhan.  Rama had high expectations when it came to aquaria.  
                Not only did he want his fish to be of high quality, but that the service that was provided with those fish just as important.  
                Our core beliefs in Value, Knowledge, and Service define who we are and what we want our business to represent.  
                We seek to live out these ideals whether you are a first time customer in our store, or sending us a message online.
                </p>
                <p>
                    We put our beliefs into practice first by owning and maintaing our warehouse.
                    with that space, we have the ability to cut out any middlemen and make sure that our prices are as good as possible.
                    We also make sure that our staff is friendly, knowledgable, and willing to go the extra mile to serve you.
                </p>
            </section>
            {/* <details className={styles.faqs}>
                <summary className={pacifico.className}>FAQs</summary>
                <div className={styles.question}>
                    <h4>What is your return policy?</h4>
                    <p>
                        We have a 7 day live fish guarantee on most fish.  
                        We require that a seperate water sample that does not have dead fish in it. 
                        We do not cover dead fish from fighting, jumping out, or gross negligence. 
                        Nitrates over 100, Ammonia over 0.25 and nitrites over 1 void any guarentee. 
                        Guarentee also does not over stingrays and other delicate exotic fish.
                    </p>
                </div>
                <div className={styles.question}>
                    <h4>Do you sell aquariums and supplies?</h4>
                    <p>
                    Absolutely! 
                    We sell both new and used aquariums and accessories. 
                    Used equipment is available intermittently as we aquire it. 
                    We can order new tanks and have them in within a week. 
                    The reason for any lead time is that we only sell quality aquariums made of quality glass like Perfecto, All Glass, etc. 
                    There are cheaper tanks available at big box stores, but the quality of them is not as good. They are prone to breaking, leaking, spilling, and other problems.
                    </p>
                </div>
                <div className={styles.question}>
                    <h4>Are prices firm?</h4>
                    <p> 
                        There can be some flexibility! Though, some fish are more flexible than others. 
                        More often than not, the more fish purchased, the more we can negotiate price!
                        Our prices are already reasonable, though we are happy to have a conversation about it! 
                        Just be realistic and understanding of us trying to service the Richmond area with exotic fish for hopefully many years to come. 
                    </p>
                </div>
                <div className={styles.question}>
                    <h4>Why should I buy from you?</h4>
                    <p> 
                        That's a great question! We all love ordering things online, however there is still great value in see what you are buying!
                        Especially when it comes to live animals, seeing what you get and being able to take it home yourself is ideal.
                        Even more so, you get to benefit from our expertice! Whether you are a new hobbyist, or have been around for a while, there are always new things to learn!
                        We love not only supplying the exotic community, but being a part of it as well!
                    </p>
                </div>
            </details> */}
        </div>
    )
}