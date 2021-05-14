import { BetterElement } from "./BetterElement.js";

const app = document.getElementById("app");

const BIG = "big";
const H = "horizontal";
const V = "vertical";
const HUGE = "huge";

export const Sculptures = {
  isOpen: false,
  title: "The Sculptures",

  open: function () {
    let outerTilesDiv = BetterElement("div", "outerTilesDiv");

    for (let statueImage in listOfStatues) {
      let tileDiv = BetterElement("div", "tileDiv", listOfStatues[statueImage]);
      let image = BetterElement("img", "statueImage");
      image.src = "images/statues/" + statueImage;
      tileDiv.appendChild(image);
      outerTilesDiv.appendChild(tileDiv);
    }

    app.appendChild(outerTilesDiv);

    setTimeout(()=> outerTilesDiv.rollout('translateX(0vw)'), 300);

    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};

const listOfStatues = {
  "hamilton-thecape-2200x2401.jpeg": HUGE,
  "SC_spacetower-275x413.jpeg": V,
  "SC-bridge-medallions-north-551x413.jpeg": HUGE,
  "SC-bushstatue-612x413.jpeg": H,
  "SC-keeper-of-the-garden-615x411.jpeg": HUGE,
  "SC-come-unto-me-310x413.jpeg": V,
  "SC-community3-551x413.jpeg": BIG,
  "SC-complexity_caNspctJREKqUHt7uI7O-305x413.jpeg": V,
  "SC-cos 058-crop-u8807-806x390.jpeg": H,
  "SC-cos 111-crop-u8803-806x390.jpeg": H,
  "SC-cos134-crop-u8395-760x390.jpeg": H,
  "SC-doubledancer-508x385.jpeg": H,
  "SC-family-of-man-551x413.jpeg": BIG,
  "SC-fhhscuplture-310x413.jpeg": V,
  "SC-firstride237x158-236x157.jpeg": H,
  "SC-hamilton-gateway-294x413.jpeg": V,
  "SC-hannah_cos-451x476.gif": BIG,
  "SC-kittybench-crop-u13261-700x390.jpeg": H,
  "SC-learn_together-615x413.jpeg": H,
  "SC-legacy-literature-301x413.jpeg": V,
  "SC-passages-551x413.jpeg": H,
  "SC-peace-officer-277x413.jpeg": V,
  "SC-pioneer_family-171x256.jpeg": BIG,
  "SC-riverside-mallards2-420x413.jpeg": BIG,
  "SC-swirls2-crop-u7637-806x390.jpeg": H,
  "SCBigDogsummer-6016x4016.jpeg": H,
  "SCCometogether2-6016x4016.jpeg": H,
  "SCFiremansMemorial-6016x4016.jpeg": BIG,
  "SCGuitarRockinRiversEdge-636x960.jpeg": V,
  "SCHebe-6016x4016.jpeg": H,
  "ScHelios-Guardians-6016x4016.jpeg": BIG,
  "SCLentil_BFs7DZ1TZm5nB0UAZAP0-960x612.jpeg": BIG,
  "SCMillikinWoods-Totem-4016x6016.jpeg": V,
  "SCParkPlace-6016x4016.jpeg": H,
  "SCResurgence4-6016x4016.jpeg": BIG,
  "SCSnapshot-4720x3775.jpeg": HUGE,
  "SCSomedayA-6016x4016.jpeg": H,
  "SCSymmes-Monument-6016x4016.jpeg": V,
  "SCTheProtector-4016x6016.jpeg": V,
  "SCWindforestKinetic_riuy5NaySpmGfyXzbAtf-6016x4016.jpeg": BIG,
  "sharedvision-275x413.jpeg": V,
  "SherryCOrbetKineticSculpture-1704x2272.jpeg": V,
  "spring-619x413.jpeg": BIG,
  "torrent1-277x413.jpeg": V,
  "twohalvesofawhole-460x345.jpeg": H,
  "victory-275x413.jpeg": V,
  "whenitrains-262x413.jpeg": V,
};
