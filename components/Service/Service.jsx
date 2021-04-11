import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

const Service = () => {
  const [hair, setHair] = useState(true);
  const [prp, setPrp] = useState(false);
  const [meso, setMeso] = useState(false);

  const onClickHair = () => {
    setHair(true);
    setPrp(false);
    setMeso(false);
  };
  const onClickPrp = () => {
    setHair(false);
    setPrp(true);
    setMeso(false);
  };
  const onClickMeso = () => {
    setHair(false);
    setPrp(false);
    setMeso(true);
  };

  console.log(hair);
  console.log(prp);
  console.log(meso);
  return (
    <div className="container about pt-115 pb-120">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center pb-25">
            <h5 className="sub_title">Service</h5>
            <h4 className="main_title">Details about our service</h4>
          </div>{" "}
          {/* section title */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
          <ul className="pb-20">
            <li onClick={onClickHair}>Hair Replacement</li>
            <li onClick={onClickPrp}>PRP</li>
            <li onClick={onClickMeso}>Meotherapy</li>
          </ul>
        </div>
      </div>
      {prp && (
        <div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_title pb-20">
                <h5 className="sub_title">Platelet Rich Plasma Therapy</h5>
              </div>{" "}
              {/* section title */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
              <p>
                With a thin needle, your own Platelet-Rich Plasma (PRP) is
                injected into the scalp. Then the growth factors in your blood
                cells do their job and hair growth is naturally stimulated.
              </p>
              <br />
              <p>
                PRP Hair Restoration is suitable for both men and women. It is a
                state of the art, non surgical, totally natural, alternative
                medical procedure used for the treatment of hair loss or hair
                thinning. It is an injectable treatment which uses the patient’s
                own blood.
              </p>
              <br />
              <p>
                Our blood plasma (PRP) contains active growth factors which can
                promote hair growth. Helping to restore one’s confidence, the
                end result is a fuller, healthier looking head of hair.
              </p>
              <p>
                The cost of PRP hair treatment can be considerable, as more
                sessions may be needed to obtain the desired result.
              </p>
              <p>
                PRP is also being used in conjunction with some hair transplant
                procedures.
              </p>
              <p>
                At this time there is not yet clinical proof that it works, but
                the results are very promising.
              </p>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section_title pt-25 pb-20">
                  <h5 className="sub_title">The PRP Therapy</h5>
                </div>{" "}
                {/* section title */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="more-about-prp">
                  <p>
                    The doctor takes a little blood which is then treated in a
                    centrifuge so that only the enriched cells or platelets
                    (PRP) remain.
                  </p>
                  <br />
                  <p>
                    The PRP or highly concentrated Platelet Rich Plasma,
                    including essential growth proteins, is injected into the
                    scalp or areas to be treated using a special micro needle.
                  </p>
                  <br />
                  <p>
                    It is possible to use PRP Hair Loss Therapy alone to promote
                    hair growth or it can also be used in combination with hair
                    transplant or restoration surgery.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <Image
                  width="600"
                  height="300"
                  src="https://cosmetica.com.bd/wp-content/uploads/2017/08/prp-sesion.png"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section_title pt-25 pb-20">
                  <h5 className="sub_title">The Results</h5>
                </div>{" "}
                {/* section title */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <Image
                  width="600"
                  height="300"
                  src="https://cosmetica.com.bd/wp-content/uploads/2017/08/results-1.png"
                />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="more-about-prp">
                  <p>
                    The treatment is carried out by injecting a cocktail of
                    various minerals, amino acids, enzymes,and vitamins that
                    repair hair tissues and promote growth of new tissues. This
                    nutrient rich liquid is injected into the scalp where the
                    tissues of skin are found. The mixture of different elements
                    promotes blood circulation in the scalp, thus preventing
                    hair breakage. It also speeds up the formation of new hair
                    follicles and gives them the needed nutrients to form as
                    strong strands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="section_title pt-25 pb-20">
                  <h5 className="sub_title">Related videos</h5>
                </div>{" "}
                {/* section title */}
              </div>
              <div className="video-player col-lg-12">
                <ReactPlayer url="https://youtu.be/MKAKKli-tSs" />
              </div>
            </div>
          </div>
        </div>
      )}
      {meso && (
        <div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_title pb-20">
                <h5 className="sub_title">Hair Mesotherapy</h5>
              </div>{" "}
              {/* section title */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
              <p>
                Pioneered by the French physician Dr. Michel Pistor in 1952,
                Mesotherapy is a minimally invasive procedure that is widely
                used in Europe and elsewhere to treat various injuries and
                medical conditions. Tiny “medicinal bullets” are delivered
                directly into the mesoderm (middle layer of skin) by micro
                injections that are highly specific to the condition being
                treated. By definition any medication injected into the skin,
                fat or tissues of Mesoderm (middle layer of skin) is considered
                Mesotherapy. Mesotherapy is also known as Lipodissolve/Injection
                Lipolysis.
              </p>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section_title pt-25 pb-20">
                  <h5 className="sub_title">How It Works</h5>
                </div>{" "}
                {/* section title */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="more-about-prp">
                  <p>
                    The treatment is carried out by injecting a cocktail of
                    various minerals, amino acids, enzymes,and vitamins that
                    repair hair tissues and promote growth of new tissues. This
                    nutrient rich liquid is injected into the scalp where the
                    tissues of skin are found. The mixture of different elements
                    promotes blood circulation in the scalp, thus preventing
                    hair breakage. It also speeds up the formation of new hair
                    follicles and gives them the needed nutrients to form as
                    strong strands.
                  </p>
                  <br />
                  <p>
                    Mesotherapy treatments are always tailored as per individual
                    needs. Each session takes about 1 hour ­30 minutes. While
                    the number of total session vary, a minimum of 10 sessions
                    is required to prevent the hair loss and stimulate hair
                    growth. It involves no surgery or anesthesia ­ as soon as
                    the treatment is over, you can get back to your everyday
                    activities.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <Image
                  width="600"
                  height="300"
                  src="https://cosmetica.com.bd/wp-content/uploads/2017/08/how-it-works.png"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section_title pt-25 pb-20">
                  <h5 className="sub_title">The Results</h5>
                </div>{" "}
                {/* section title */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <Image
                  width="600"
                  height="300"
                  src="https://cosmetica.com.bd/wp-content/uploads/2017/08/results-1.png"
                />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="more-about-prp">
                  <p>
                    The treatment is carried out by injecting a cocktail of
                    various minerals, amino acids, enzymes,and vitamins that
                    repair hair tissues and promote growth of new tissues. This
                    nutrient rich liquid is injected into the scalp where the
                    tissues of skin are found. The mixture of different elements
                    promotes blood circulation in the scalp, thus preventing
                    hair breakage. It also speeds up the formation of new hair
                    follicles and gives them the needed nutrients to form as
                    strong strands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="section_title pt-25 pb-20">
                  <h5 className="sub_title">Related videos</h5>
                </div>{" "}
                {/* section title */}
              </div>
              <div className="video-player col-lg-12">
                <ReactPlayer url="https://youtu.be/vuJxm-dQ82U" />
              </div>
            </div>
          </div>
        </div>
      )}
      {hair && (
        <div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_title pb-25">
                <h5 className="sub_title">Hair Replacement</h5>
              </div>{" "}
              {/* section title */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12">
              <p>
                <strong>COSMETICA</strong> is the leading providers of high
                quality hair systems within the hair replacement industry. We
                use the best quality hair and techniques along with advanced
                technology to create a truly bespoke, natural, and undetectable
                hair system. This will blend perfectly with your own hair and
                nobody will ever have to know you wear one.
              </p>
              <br />
              <p>
                We use the highest quality hair available and leading providers
                in European Hair so we can match your hair with complete
                confidence. We have a solution for each and every client as hair
                loss can be in many different forms such as partial hair loss,
                total hair loss or even a condition known as Alopecia where
                sections of hair fall out.
              </p>
              <br />
              <p>
                At <strong>COSMETICA</strong> we have experienced Trichologists
                and a dedicated team of stylists who will guide you through the
                entire process and provide you with the best form of
                non-surgical hair loss solutions to suit your needs and fit your
                lifestyle
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-xs-12 col-sm-12">
              <Image
                src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/before.jpg"
                width="600"
                height="500"
                alt="hair-replacement-before"
              />
            </div>
          </div>
          <div className="row">
            <div className="pt-25 col-lg-5 col-md-5 col-xs-12 col-sm-12">
              <Image
                src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/after.jpg"
                width="600"
                height="500"
                alt="hair-replacement-before"
              />
            </div>
            <div className="pt-25 col-lg-7 col-md-7 col-xs-12 col-sm-12">
              <p className="text-center">
                <div className="col-lg-12">
                  <div className="section_title pb-25">
                    <h5 className="sub_title">Some MYTH</h5>
                  </div>{" "}
                  {/* section title */}
                </div>
              </p>
              <p>
                MYTH: The more money you pay the better the quality of a hair
                system you get.
              </p>
              <br />
              <p>
                FACT: The manufacturing costs for making a hair system is
                exactly the same whether you pay £250, £750 or £2,000 for a hair
                system.
              </p>
              <br />
              <p>
                SOLUTION: Cosmetica has made Hair Replacement AFFORDABLE. The
                skill is to understand the techniques involved in making a truly
                bespoke and undetectable hair system by paying close attention
                to the hairlines, the way in which the hair is knotted, colour
                match to your own hair perfectly and the actual fitting, cut and
                style of the hair piece. We use the most advanced materials,
                techniques and technology when it comes to designing your custom
                hairpiece.
              </p>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="section_title pt-25 pb-20">
                  <h5 className="sub_title">Related videos</h5>
                </div>{" "}
                {/* section title */}
              </div>

              <div className="video-player col-lg-12">
                <ReactPlayer url="https://www.youtube.com/watch?v=9B7cm1QD4nA&t=234s" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
