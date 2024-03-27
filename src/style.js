const styles = {
  boxWidth: "xl:max-w-[1140px] w-full mx-auto",

  heading:
    "sm:text-[40px] sm:leading-normal text-3xl tracking-[0.8px] uppercase font-anton text-dark",
  paragraph: "text-[14px] leading-[24px] font-medium text-gray font-montserrat",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  padding: "sm:px-16 px-4 sm:py-12 py-8",

  paddingX: "sm:px-16 px-4",
  paddingY: "sm:py-16 py-8",

  marginX: "sm:mx-16 mx-8",
  marginY: "sm:my-16 my-8",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.padding}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.padding}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
