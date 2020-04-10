var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.1904688891209894,
        "pitch": 0.29244407880579004,
        "fov": 1.3836063943498988
      },
      "linkHotspots": [
        {
          "yaw": -0.3718917459599531,
          "pitch": 0.10029422029437463,
          "rotation": 0,
          "target": "2-exam-room-2"
        },
        {
          "yaw": 2.5164474961737895,
          "pitch": 0.17414917630055626,
          "rotation": 0,
          "target": "1-exam-room-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5758665311342632,
          "pitch": 0.6773649758882989,
          "title": "Patient Waiting Chair",
          "text": "This is where patients wait to see the doctor"
        },
        {
          "yaw": -2.4920693108897645,
          "pitch": 0.4845755381725887,
          "title": "Check-in Desk&nbsp;",
          "text": "This is where patients check in to be seen&nbsp;"
        },
        {
          "yaw": -3.065790469978918,
          "pitch": 0.13068662128364572,
          "title": "Refrigerator for Antibiotics&nbsp;",
          "text": "Some antibiotics must be kept at a certain temperature&nbsp;"
        },
        {
          "yaw": -0.0987028028173409,
          "pitch": 0.3112544769655834,
          "title": "Entrance",
          "text": "Front Door to the truck&nbsp;"
        },
        {
          "yaw": -0.9607474045382638,
          "pitch": 0.5209814766758001,
          "title": "Handicap Accessible Bathroom",
          "text": "The waiting chair folds up to allow access to this bathroom"
        },
        {
          "yaw": 0.4379772056084619,
          "pitch": 0.564759613735907,
          "title": "Chair Holder",
          "text": "Holds chair while the truck is in motion"
        },
        {
          "yaw": -0.8338670293433381,
          "pitch": -1.5075524379234704,
          "title": "Skylight",
          "text": "Used to calm patients"
        }
      ]
    },
    {
      "id": "1-exam-room-1",
      "name": "Exam Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0555320392251435,
          "pitch": 0.10405544514321008,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5462748979983676,
          "pitch": 0.16768935974702082,
          "title": "Handicap Accessible Entrance",
          "text": "Entrance that lifts patients to the height of the truck and directly into an exam room&nbsp;"
        },
        {
          "yaw": -1.3691194105149993,
          "pitch": -0.0817522880288788,
          "title": "Privacy Curtain",
          "text": "Privacy curtain that covers the exam chair"
        },
        {
          "yaw": -2.195460698715273,
          "pitch": 0.028671300953657664,
          "title": "Doctor Tools",
          "text": "Blood Pressure Monitor, Thermometer, Otoscope, Ophthalmoscope and Thermometer"
        }
      ]
    },
    {
      "id": "2-exam-room-2",
      "name": "Exam Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.168375021095663,
          "pitch": 0.25914801892784567,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4013866584410373,
          "pitch": -0.14886178364484337,
          "title": "Microwave",
          "text": "This microwave is used by the staff to heat up their lunches"
        },
        {
          "yaw": -2.0103058705387458,
          "pitch": 0.04094947572325225,
          "title": "Doctor Tools",
          "text": "Blood Pressure Monitor, Thermometer, Otoscope, Ophthalmoscope and Thermometer"
        },
        {
          "yaw": 2.075529222336826,
          "pitch": 0.5270553305905938,
          "title": "Door to Lobby",
          "text": "Door can be shut for privacy while seeing patients&nbsp;"
        },
        {
          "yaw": -2.7154504801294763,
          "pitch": -1.4394446347609673,
          "title": "Skylight",
          "text": "Used to calm patients&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
