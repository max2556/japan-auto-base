import React from "react";

const options = {
  honda: [
    "Все модели",
    "ACORD",
    "ACORD HYBRID",
    "ACORD TOURER",
    "ACORD WAGON",
    "ACTY",
    "ACTY TRUCK",
    "ACTY VAN",
    "AIRWAVE",
    "AMERICAN ACCORD",
    "ASCOT",
    "AVANCIER",
    "BEAT",
    "CAPA",
    "CITY",
    "CIVIC",
    "CIVIC COUPE",
    "CIVIC FERIO",
    "CIVIC HYBRID",
    "CIVIC SHUTTLE",
    "CLARITY PHEV",
    "CR-V",
    "CR-X",
    "CR-X DELSOL",
    "CR-Z",
    "CROSSROAD",
    "EDIX",
    "ELEMENT",
    "ELYSION",
    "ELYSION PRESTIGE",
    "FIT ARIA",
    "FIT HYBRID",
    "FIT SHUTTLE",
    "FIT SHUTTLE HYBRID",
    "FREED +",
    "FREED HYBRID",
    "FREED SPIKE",
    "FREED SPIKE HYBRID",
    "FREED+",
    "GRACE",
    "GYRO CANOPY BIKE",
    "HONDA E",
    "HR-V",
    "INSIGHT",
    "INSIGHT EXCLUSIVE",
    "INSPIRE",
    "INTEGRA",
    "JADE",
    "LAGREAT",
    "LEGEND",
    "LIFE",
    "LIFE DUNK",
    "LIVE DIVA",
    "LOGO",
    "MDX",
    "MOBILIO",
    "MOBILIO SPIKE",
    "N BOX",
    "N BOX +",
    "N BOX CUSTOM",
    "N BOX+CUSTOM",
    "N-BOX SLASH",
    "N-ONE",
    "N-VAN",
    "N-WGN",
    "N360",
    "NSX",
    "ODYSSEY",
    "ODYSSEY HYBRID",
    "ORTHIA",
    "OTHER",
    "PARTNER",
    "PRELUDE",
    "QUINT INTEGRA",
    "RIDGELINE",
    "S-MX",
    "S2000",
    "S600",
    "S660",
    "SABER",
    "SHUTTLE",
    "STREAM",
    "STREET",
    "THATS",
    "TODAY",
    "TODAY ASSOCIE",
    "TORNEO",
    "VAMOS",
    "VAMOS HOBIO",
    "VEZEL",
    "VIGOR",
    "Z",
    "ZEST",
    "ZEST SPARK",
    "ZR-V",
  ],
  toyota: [
    "Все модели",
    "4RUNNER",
    "86",
    "ALLEX",
    "ALLION",
    "ALPHARD",
    "ALPHARD G",
    "ALPHARD HYBRID",
    "ALPHARD V",
    "ALTEZZA",
    "ALTEZZA GITA",
    "AQUA",
    "ARISTO",
    "AURIS",
    "AVENSIS",
    "AVENSIS SEDAN",
    "AVENSIS WAGON",
    "BB",
    "BELTA",
    "BLADE",
    "BLIZZARD",
    "BREVIS",
    "BZ4X",
    "C-HR",
    "CALDINA",
    "CALDINA VAN",
    "CAMI",
    "CAMROAD",
    "CAMRY",
    "CAMRY GRACIA",
    "CAROLLA",
    "CAROLLA AXIO",
    "CAROLLA CROSS",
    "CAROLLA FIELDER",
    "CAROLLA LEVIN",
    "CAROLLA RUMION",
    "CAROLLA RUNX",
    "CAROLLA SPACIO",
    "CAROLLA SPORT",
    "CAROLLA TOURING WAGON",
    "CAROLLA VAN",
    "CAROLLA WAGON",
    "CELICA",
    "CELICA XX",
    "CELSIOR",
    "CENTURY",
    "CHASER",
    "CLASSIC",
    "COASTER",
    "COPEN",
    "COROLLA",
    "COROLLA AXIO",
    "COROLLA CROSS",
    "COROLLA FIELDER",
    "COROLLA LEVIN",
    "COROLLA RUMION",
    "COROLLA RUNX",
    "COROLLA SPACIO",
    "COROLLA SPORT",
    "COROLLA TOURING WAGON",
    "COROLLA VAN",
    "COROLLA WAGON",
    "CORONA",
    "CORONA PREMIO",
    "CRESTA",
    "CROWN",
    "CROWN ATHLETE",
    "CROWN COMFORT",
    "CROWN ESTATE",
    "CROWN HYBRID",
    "CROWN MAJESTA",
    "CROWN STATION WAGON",
    "CROWN VAN",
    "CUREN",
    "CYNOS",
    "DUET",
    "DYNA",
    "DYNA DUMP",
    "DYNA TRUCK",
    "DYNA VAN",
    "ESQUIRE",
    "ESTIMA",
    "ESTIMA EMINA",
    "ESTIMA HYBRID",
    "ESTIMA L",
    "ESTIMA LUCIDA",
    "ESTIMA T",
    "FJ CRUISER",
    "FUN CARGO",
    "GAYA",
    "GR COROLLA",
    "GR YARIS",
    "GR86",
    "GRANACE",
    "GRANDIACE",
    "GRAND HIACE",
    "GRANVIA",
    "GRMN YARIS",
    "HARRIER",
    "HARRIER HYBRID",
    "HIACE",
    "HIACE COMMUTER",
    "HIACE REGIUS",
    "HIACE TRUCK",
    "HIACE VAN",
    "HIACE WAGON",
    "HILUX PICK UP",
    "HILUX SPORTS PICK UP",
    "HILUX SURF",
    "IPSUM",
    "IQ",
    "ISIS",
    "IST",
    "JPN TAXI",
    "KLUGER",
    "KLUGER HYBRID",
    "KLUGER V",
    "LAND CRUISER",
    "LAND CRUISER 100",
    "LAND CRUISER 40",
    "LAND CRUISER 60",
    "LAND CRUISER 70",
    "LAND CRUISER 80",
    "LAND CRUISER PRADO",
    "LITE ACE NOAH",
    "LITE ACE TRUCK",
    "LITE ACE VAN",
    "LITE ACE WAGON",
    "MARK II",
    "MARK II BLIT",
    "MARK II QUALIS",
    "MARK II WAGON",
    "MARK X",
    "MARK X ZIO",
    "MASTER ACE SURF",
    "MAYBACH",
    "MEGA CRUISER",
    "MIRAI",
    "MR-S",
    "MR2",
    "NADIA",
    "NOAH",
    "OPA",
    "ORIGIN",
    "OTHER",
    "PASSO",
    "PASSO SETTE",
    "PIXIS EPOCH",
    "PIXIS JOY",
    "PIXIS MEGA",
    "PIXIS SPACE",
    "PIXIS TRUCK",
    "PIXIS VAN",
    "PLATZ",
    "PORTE",
    "PROBOX",
    "PROBOX VAN",
    "PROBOX WAGON",
    "PROGRES",
    "PRONARD",
    "PUBLICA",
    "QUICK DELIVERY",
    "RACTIS",
    "RAIZE",
    "RAUM",
    "RAV4",
    "RAV4 J",
    "RAV4 L",
    "REGIUS",
    "REGIUS ACE",
    "REGIUS VAN",
    "ROOMY",
    "RUSH",
    "SAI",
    "SEQUOIA",
    "SERA",
    "SIENNA",
    "SIENTA",
    "SOARER",
    "SPADE",
    "SPARKY",
    "SPORTS 800",
    "SPRINTER",
    "SPRINTER CARIB",
    "SPRINTER MARINO",
    "SPRINTER TRUENO",
    "SPRINTER WAGON",
    "STARLET",
    "SUCCEED VAN",
    "SUCCEED WAGON",
    "SUPRA",
    "TACOMA",
    "TANK",
    "TERCEL",
    "TOURING HIACE",
    "TOWN ACE",
    "TOWN ACE NOAH",
    "TOWN ACE TRUCK",
    "TOWN ACE VAN",
    "TOWN ACE WAGON",
    "TOYOACE",
    "TOYOACE TRUCK",
    "TOYOACE VAN",
    "TUNDRA",
    "URBAN SUPPORTER",
    "VANGUARD",
    "VELLFIRE",
    "VELLFIRE HYBRID",
    "VEROSSA",
    "VISTA",
    "VISTA ARDEO",
    "VITZ",
    "VOLTZ",
    "VOXY",
    "WILL CYPHA",
    "WILL VI",
    "WILL VS",
    "WINDOM",
    "WISH",
    "YARIS",
    "YARIS CROSS",
  ],
  suzuki: [
    "Все модели",
    "AERIO SEDAN",
    "ALTO",
    "ALTO ECO",
    "ALTO LAPIN",
    "ALTO LAPIN CHOCOLATE",
    "ALTO TURBO RS",
    "ALTO WORKS",
    "BALENO",
    "CAPPUCCINO",
    "CARRY",
    "CARRY TRUCK",
    "CERVO",
    "CERVO CLASSIC",
    "CERVO MODE",
    "CRUZE",
    "ESCUDO",
    "EVERY",
    "EVERY +(PLUS)",
    "EVERY LANDY",
    "EVERY VAN",
    "EVERY WAGON",
    "GRAND ESCUDO",
    "HUSTLER",
    "IGNIS",
    "JIMNY",
    "JIMNY SIERRA",
    "JIMNY WIDE",
    "KEI",
    "KEI WORKS",
    "KIZASHI",
    "LANDY",
    "LAPIN LC",
    "MIGHTY BOY",
    "MRWAGON",
    "MW",
    "OTHER",
    "PALETTE",
    "PALETTE SW",
    "SOLIO",
    "SOLIO BANDIT",
    "SPACIA",
    "SPACIA BACE",
    "SPACIA CUSTOM",
    "SPACIA GEAR",
    "SPLASH",
    "SWIFT",
    "SWIFT SPORTS",
    "SX4",
    "SX4 S-CROSS",
    "TWIN",
    "WAGON R",
    "WAGON R CUSTOM Z",
    "WAGON R RR",
    "WAGON R SMILE",
    "WAGON R SOLIO",
    "WAGON R STINGRAY",
    "X-90",
    "XBEE",
  ],
  mitsubishi: [
    "Все модели",
    "AIRTREK",
    "BRAVO",
    "CANTER",
    "CANTER DUMP",
    "CHALLENGER",
    "CHARIOT GRANDIS",
    "COLT",
    "COLT PLUS",
    "DEBONAIR",
    "DELICA D:2",
    "DELICA D:3",
    "DELICA D:5",
    "DELICA SPACE GEAR",
    "DELICA TRUCK",
    "DELICA VAN",
    "DELICA WAGON",
    "DIAMANTE",
    "DIGNITY",
    "DINGO",
    "ECLIPSE",
    "ECLIPSE CROSS",
    "ECLIPSE CROSS PHEV",
    "ECLIPSE SPIDER",
    "EK ACTIVE",
    "EK CLASSY",
    "EK CUSTOM",
    "EK SPACE",
    "EK SPACE CUSTOM",
    "EK SPORTS",
    "EK WAGON",
    "EK X",
    "EK X EV",
    "EK X SPACE",
    "FORKLIFT",
    "FTO",
    "FUSO",
    "FUSO AERO MIDI ",
    "FUSO CANTER GUTS",
    "FUSO FIGHTER",
    "FUSO FIGHTER MIGNON",
    "FUSO ROSA",
    "FUSO SUPER GREAT",
    "FUSO THE GREAT",
    "FUSO TRUCK",
    "GALANT",
    "GALANT FORTIS",
    "GALANT FORTIS SPORTBACK",
    "GALANT SIGMA",
    "GALANT SPORTS",
    "GRANDIS",
    "GTO",
    "I",
    "I-MIEV",
    "JEEP",
    "LANCER",
    "LANCER CARGO",
    "LANCER CEDIA",
    "LANCER EVOLUTION",
    "LANCER VAN",
    "LANCER WAGON",
    "LEGNUM",
    "MINICA",
    "MINICA TOPPO",
    "MINICAB",
    "MINICAB BRAVO",
    "MINICAB MIEV",
    "MINICAB MIEV TRUCK",
    "MINICAB TRUCK",
    "MIRAGE",
    "OTHER",
    "OUTLANDER",
    "OUTLANDER PHEV",
    "PAJERO",
    "PAJERO IO",
    "PAJERO JUNIOR",
    "PAJERO MINI",
    "PROUDIA",
    "RVR",
    "SIGMA",
    "STARION",
    "STRADA",
    "TOPPO",
    "TOPPO BJ",
    "TOWN BOX",
    "TRITON",
  ],
  subaru: [
    "Все модели",
    "360",
    "ALCYONE SVX",
    "BRZ",
    "CHIFFON",
    "CROSSTREK",
    "DEX",
    "DIAS WAGON",
    "DOMINGO",
    "EXIGA",
    "EXIGA CROSSOVER 7",
    "FORESTER",
    "IMPREZA",
    "IMPREZA ANESIS",
    "IMPREZA G4",
    "IMPREZA SPORT",
    "IMPREZA SPORT HYBRID",
    "IMPREZA SPORT WAGON",
    "IMPREZA WRX",
    "IMPREZA XV",
    "JUSTY",
    "LEGACY",
    "LEGACY B4",
    "LEGACY LANCASTER",
    "LEGACY TOURING WAGON",
    "LEGACY WAGON",
    "LEONE",
    "LUCRA",
    "LUCRA CUSTOM",
    "OTHER",
    "OUTBACK",
    "PLEO",
    "PLEO CUSTOM",
    "PLEO NESTA",
    "PLEO PLUS",
    "R1",
    "R2",
    "REX",
    "SAMBAR",
    "SAMBAR DIAS",
    "SAMBAR TRUCK",
    "SAMBAR VAN",
    "SOLTERRA",
    "STELLA",
    "SUBARU XV",
    "TRAVIQ",
    "TREZIA",
    "VIVIO",
    "WRX S4",
    "WRX STI",
  ],
  mazda: [
    "Все модели",
    "ATENZA",
    "ATENZA SEDAN",
    "ATENZA SPORT",
    "ATENZA SPORT WAGON",
    "ATENZA WAGON",
    "AUTOZAM AZ-1",
    "AUTOZAM AZ-3",
    "AUTOZAM SCRUM",
    "AXELA",
    "AXELA HYBRID",
    "AXELA SPORT",
    "AZ OFFROAD",
    "AZ WAGON",
    "AZ WAGON CUSTOM STYLE",
    "BIANTE",
    "BONGO",
    "BONGO BRAWNY",
    "BONGO BRAWNY TRUCK",
    "BONGO BRAWNY VAN",
    "BONGO FRIENDEE",
    "BONGO TRUCK",
    "BONGO VAN",
    "BONGO WAGON",
    "CAPELLA",
    "CAPELLA WAGON",
    "CAROL",
    "CAROL ECO",
    "COSMO SPORT",
    "CRONOS",
    "CX-3",
    "CX-30",
    "CX-5",
    "CX-60",
    "CX-7",
    "CX-8",
    "DEMIO",
    "EFINI MS-9",
    "EFINI RX-7",
    "EUNOS COSMO",
    "EUNOS PRESSO",
    "EUNOS ROADSTER",
    "FAMILIA",
    "FAMILIA VAN",
    "FLAIR",
    "FLAIR CROSSOVER",
    "FLAIR WAGON",
    "FLAIR WAGON CUSTOM STYLE",
    "FLAIR WAGON TOUGH STYLE",
    "LAPUTA",
    "LUCE",
    "MAZDA SPEED ATENZA",
    "MAZDA SPEED AXELA",
    "MAZDA2",
    "MAZDA3",
    "MAZDA3 FASTBACK",
    "MAZDA6",
    "MILLENIA",
    "MPV",
    "MX-30",
    "MX-30 EV MODEL",
    "OTHER",
    "PORTER CAB",
    "PREMACY",
    "PROCEED",
    "PROCEED MARVIE",
    "ROADSTER",
    "ROADSTER RF",
    "RX-7",
    "RX-8",
    "SAVANNA RX-7",
    "SCRUM",
    "SCRUM TRUCK",
    "SCRUM WAGON",
    "SENTIA",
    "SPIANO",
    "TITAN",
    "TITAN DASH",
    "TITAN DUMP",
    "TITAN TRUCK",
    "TRIBUTE",
    "VERISA",
  ],
  nissan: [
    "Все модели",
    "180SX",
    "AD",
    "AD EXPERT",
    "AD VAN",
    "ARIYA",
    "ATLAS",
    "ATLAS DUMP",
    "ATLAS LOCO",
    "AURA",
    "AVENIR",
    "AVENIR VAN",
    "BE-1",
    "BIG THUMB",
    "BLUEBIRD",
    "BLUEBIRD SYLPHY",
    "CARAVAN",
    "CARAVAN BUS",
    "CARAVAN COACH",
    "CARAVAN VAN",
    "CARAVAN WAGON",
    "CEDRIC",
    "CEDRIC CIMA",
    "CEDRIC VAN",
    "CEFIRO",
    "CIMA",
    "CIVILIAN",
    "CLIPPER",
    "CLIPPER RIO",
    "CLIPPER TRUCK",
    "CLIPPER VAN",
    "CONDOR",
    "CREW",
    "CUBE",
    "CUBE CUBIC",
    "DATSUN",
    "DAYZ",
    "DAYZ ROOX",
    "DUALIS",
    "E-NV200 VAN",
    "E-NV200 WAGON",
    "ELGRAND",
    "EXA",
    "EXPERT",
    "FAIRLADY Z",
    "FIGARO",
    "FUGA",
    "FUGA HYBRID",
    "GLORIA",
    "GLORIA CIMA",
    "GLORIA VAN",
    "GLORIA WAGON",
    "GT-R",
    "HOMY",
    "HOMY COACH",
    "HOMY ELGRAND",
    "INFINITI Q45",
    "JUKE",
    "KICKS",
    "LAFESTA",
    "LARGO",
    "LAUREL",
    "LEAF",
    "LEOPARD",
    "LIBERTY",
    "MARCH",
    "MARCH BOX",
    "MICRA",
    "MICRA C+C",
    "MISTRAL",
    "MOCO",
    "MURANO",
    "NOTE",
    "NT100 CLIPPER",
    "NT450 ATLAS",
    "NV100 CLIPPER",
    "NV100 CLIPPER RIO",
    "NV150 AD",
    "NV200 VANETTE",
    "NV200 VANETTE VAN",
    "NV350 CARAVAN",
    "NV350 CARAVAN WAGON",
    "OTHER",
    "OTTI",
    "PAO",
    "PINO",
    "PRAIRIE",
    "PRAIRIE JOY",
    "PRESAGE",
    "PRESEA",
    "PRESIDENT",
    "PRESIDENT JS",
    "PRIMERA",
    "PRIMERA CAMINO",
    "PRIMERA WAGON",
    "PRINCE SKYLINE",
    "PULSAR",
    "QUEST",
    "RASHEEN",
    "ROOX",
    "S-CARGO",
    "SAFARI",
    "SAKURA",
    "SERENA",
    "SILVIA",
    "SKYLINE",
    "SKYLINE CROSSOVER",
    "STAGEA",
    "SUNNY",
    "SUNNY TRUCK",
    "TEANA",
    "TERRANO",
    "TERRANO REGULUS",
    "TIIDA",
    "TIIDA LATIO",
    "UD",
    "VANETTE",
    "VANETTE LARGO COACH",
    "VANETTE TRUCK",
    "VANETTE VAN",
    "WINGROAD",
    "X-TRAIL",
  ],
} as const;

export interface FilterBrandProps {
  value?: string;
  onChange: (value?: string) => void;
  // mark: keyof typeof options | undefined;
  mark: string | undefined;
}

export default function FilterModel({ onChange, mark }: FilterBrandProps) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Модель</h4>
      <fieldset className="space-y-2">
        {mark ? (
          options[mark as keyof typeof options]?.map((model) => (
            <label
              key={model}
              htmlFor={model}
              className="flex gap-1 text-sm cursor-pointer"
              onClick={() =>
                model == "Все модели" ? onChange(undefined) : onChange(model)
              }
            >
              <input type="radio" id={model} name="model" className="hidden" />
              <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
                <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
              </div>
              <p className="leading-4">{model}</p>
            </label>
          ))
        ) : (
          <p className="text-sm leading-4">
            Сначала выберите <br /> марку
          </p>
        )}
      </fieldset>
    </div>
  );
}
