async function preInit(inputObj) {}

async function postInit(inputObj) {
  // console.log(`\n     _______  _______  __   __  _______  _______  _______
  //   |       ||       ||  |_|  ||       ||       ||       |
  //   |    ___||    ___||       ||    _  ||    ___||    ___|
  //   |   |___ |   |___ |       ||   |_| ||   |___ |   | __
  //   |    ___||    ___||       ||    ___||    ___||   ||  |
  //   |   |    |   |    | ||_|| ||   |    |   |___ |   |_| |
  //   |___|    |___|    |_|   |_||___|    |_______||_______|
  //                                       `);
  // console.log(`\n    Welcome to the ffmpeg-app application
  //    This application requires to open these services:
  //        FC : https://fc.console.aliyun.com/
  //    This application can help you quickly deploy the ffmpeg-app project.
  //    The application uses FC component：https://github.com/devsapp/fc
  //    The application homepage: https://github.com/devsapp/start-ffmpeg\n`);

  // throw new Error("test");

  // const { artTemplate } = inputObj;
  // artTemplate("code/flows/video-processing-fc.yml");
  return {
    ...inputObj.parameters,
    otsInstanceName: `new-${inputObj.parameters.otsInstanceName}`,
    secret2: `new-${inputObj.parameters.secret2}`,
  };
}

module.exports = {
  postInit,
  preInit,
};
