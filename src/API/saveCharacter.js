async function saveCharacterToDatabase(id,name,status,species) {
  try {
    let allSaveCharacters = localStorage.getItem("saveCharacters");
    if (!allSaveCharacters) {
      // initialize save character array
      localStorage.setItem("saveCharacters", JSON.stringify([]));
    }

    const allSaveCharactersArray = JSON.parse(
      localStorage.getItem("saveCharacters")
    );
    // check if character already saved
    const characterExist = allSaveCharactersArray?.some(
      (item) => item.id === id
    );

    if (characterExist) {
      throw new Error("Character already saved before");
    }

    // save character only if not saved yet
    //const { episode, location, origin, ...resData } = payload;
    // save only necessary data to save localstorage space
    const CURRENT_SAVED_CHARACTERS = [
      ...allSaveCharactersArray
      
    ];
    localStorage.setItem(
      "saveCharacters",
      JSON.stringify(CURRENT_SAVED_CHARACTERS)
    );
    return {
      success: true,
      msg: "Character saved successfully",
      data: id,
    };
  } catch (err) {
    return { success: false, msg: `${err.message}` };
  }
}

export default saveCharacterToDatabase;
