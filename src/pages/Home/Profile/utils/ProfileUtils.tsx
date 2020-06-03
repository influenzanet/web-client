type AvatarDefinition = {
  id: string;
  path: string;
}

export const avatarList: AvatarDefinition[] = [
  {
    id: "default_default",
    path: "/static/images/avatar/Unknown_Bunt.png",
  },
  {
    id: "default_alpaca",
    path: "/static/images/avatar/Alpaka_Bunt.png",
  },
  {
    id: "default_dolphin",
    path: "/static/images/avatar/Delfin_Bunt.png",
  },
  {
    id: "default_elephant",
    path: "/static/images/avatar/Elefant_Bunt.png",
  },
  {
    id: "default_owl",
    path: "/static/images/avatar/Eule_Bunt.png",
  },
  {
    id: "default_flamingo",
    path: "/static/images/avatar/Flamingo_Bunt.png",
  },
  {
    id: "default_fox",
    path: "/static/images/avatar/Fuchs_Bunt.png",
  },
  {
    id: "default_gecko",
    path: "/static/images/avatar/Gecko_Bunt.png",
  },
  {
    id: "default_panda",
    path: "/static/images/avatar/Panda_Bunt.png",
  },
  {
    id: "default_penguin",
    path: "/static/images/avatar/Pinguin_Bunt.png",
  },
  {
    id: "default_spider",
    path: "/static/images/avatar/Spinne_Bunt.png",
  },
  {
    id: "default_bull",
    path: "/static/images/avatar/Stier_Bunt.png",
  },
];

const getAvatarPathFromID = (avatarId: string): string => {
  let avatarPath = "/static/images/avatar/Unknown_Bunt.png";

  avatarList.forEach((avatar) => {
    if (avatar.id === avatarId) {
      avatarPath = avatar.path;
    }
  });

  return process.env.PUBLIC_URL + avatarPath;
}

export default getAvatarPathFromID;
