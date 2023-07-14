export const getColorsForSections = (strength) => {
  let firstSectionsColor = null;
  let secondSectionsColor = null;
  let thirdSectionsColor = null;

  switch (strength) {
    case 0:
      firstSectionsColor = "red";
      secondSectionsColor = "red";
      thirdSectionsColor = "red";
      break;
    case 1:
      firstSectionsColor = "red";
      secondSectionsColor = "grey";
      thirdSectionsColor = "grey";
      break;
    case 2:
      firstSectionsColor = "yellow";
      secondSectionsColor = "yellow";
      thirdSectionsColor = "grey";
      break;
    case 3:
      firstSectionsColor = "green";
      secondSectionsColor = "green";
      thirdSectionsColor = "green";
      break;

    default:
      firstSectionsColor = "grey";
      secondSectionsColor = "grey";
      thirdSectionsColor = "grey";
  }

  return [firstSectionsColor, secondSectionsColor, thirdSectionsColor];
};
