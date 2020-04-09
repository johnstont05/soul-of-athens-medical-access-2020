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
        "yaw": -2.2426717807646988,
        "pitch": 0.29160519918499617,
        "fov": 1.4881854150864144
      },
      "linkHotspots": [
        {
          "yaw": 2.4631782177683457,
          "pitch": 0.39478751759701325,
          "rotation": 6.283185307179586,
          "target": "1-exam-room-1"
        },
        {
          "yaw": -0.3550724861006902,
          "pitch": 0.05445789035031012,
          "rotation": 0,
          "target": "2-exam-room-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7523965896450466,
          "pitch": 0.5563375476440022,
          "title": "Patient Waiting Chair",
          "text": "Text"
        },
        {
          "yaw": -2.500240472944558,
          "pitch": 0.4646500470135173,
          "title": "Check-in Desk",
          "text": "Text"
        },
        {
          "yaw": -3.070050172232161,
          "pitch": 0.1445936102476466,
          "title": "Refrigerator for Antibiotics&nbsp;",
          "text": "Text"
        },
        {
          "yaw": 1.1131715149144448,
          "pitch": 1.4908119044826176,
          "title": "Patient Waiting Area",
          "text": "Text"
        },
        {
          "yaw": -0.11354766779655989,
          "pitch": 0.21426938807611862,
          "title": "Entrance",
          "text": "Text"
        },
        {
          "yaw": -1.0072732228980712,
          "pitch": 0.40979707548135735,
          "title": "Handicap Accesible Restroom",
          "text": "Text"
        },
        {
          "yaw": 0.3999332512797107,
          "pitch": 0.5653576992672473,
          "title": "Chair Holder",
          "text": "Keeps chairs in place while the truck is in motion"
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
          "yaw": -1.1137793004747216,
          "pitch": 0.23797062264996072,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.748149915382962,
          "pitch": 0.1556337203189262,
          "title": "Handicap Accesible Entrance",
          "text": "Text"
        },
        {
          "yaw": -0.3316375824144746,
          "pitch": -0.31021734399229217,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -1.4077552504738637,
          "pitch": -0.19349660389784162,
          "title": "Curtain for privacy",
          "text": "Text"
        },
        {
          "yaw": -2.2406383563633305,
          "pitch": -1.1386852599312345,
          "title": "Skylight to calm patients",
          "text": "Text"
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
          "yaw": 2.154514798936951,
          "pitch": 0.20632814945824407,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3912425115750082,
          "pitch": -0.15501847386346235,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -2.6563362054188477,
          "pitch": -1.268171997972436,
          "title": "Skylight",
          "text": "Text"
        },
        {
          "yaw": 2.146203293114066,
          "pitch": -0.11902840309585017,
          "title": "Door shuts for privacy",
          "text": "Text"
        },
        {
          "yaw": -2.057180895699471,
          "pitch": 0.029218672778265287,
          "title": "Essential Doctor Tools",
          "text": "Blood Pressure Monitor, Otoscope&nbsp;"
        },
        {
          "yaw": -0.19733644300367104,
          "pitch": -0.34215834211181395,
          "title": "Title",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
