const getAvatarPathFromID = (avatarId: string): string => {
  let avatarPath = "/static/images/avatar/Unknown_Bunt.png";

  switch (avatarId) {
    case "default_default":
      avatarPath = "/static/images/avatar/Unknown_Bunt.png";
      break;
    case "default_alpaca":
      avatarPath = "/static/images/avatar/Alpaka_Bunt.png";
      break;
    case "default_dolphin":
      avatarPath = "/static/images/avatar/Delfin_Bunt.png";
      break;
    case "default_elephant":
      avatarPath = "/static/images/avatar/Elefant_Bunt.png";
      break;
    case "default_owl":
      avatarPath = "/static/images/avatar/Eule_Bunt.png";
      break;
    case "default_flamingo":
      avatarPath = "/static/images/avatar/Flamingo_Bunt.png";
      break;
    case "default_fox":
      avatarPath = "/static/images/avatar/Fuchs_Bunt.png";
      break;
    case "default_gecko":
      avatarPath = "/static/images/avatar/Gecko_Bunt.png";
      break;
    case "default_panda":
      avatarPath = "/static/images/avatar/Panda_Bunt.png";
      break;
    case "default_penguin":
      avatarPath = "/static/images/avatar/Pinguin_Bunt.png";
      break;
    case "default_spider":
      avatarPath = "/static/images/avatar/Spinne_Bunt.png";
      break;
    case "default_bull":
      avatarPath = "/static/images/avatar/Stier_Bunt.png";
      break;
  }

  return process.env.PUBLIC_URL + avatarPath;
}

export default getAvatarPathFromID;
