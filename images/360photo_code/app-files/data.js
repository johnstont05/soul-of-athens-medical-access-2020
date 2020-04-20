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
        "yaw": -2.2031720276378692,
        "pitch": 0.3383473032708437,
        "fov": 1.4881854150864144
      },
      "linkHotspots": [
        {
          "yaw": -0.37390997871160003,
          "pitch": 0.18903155657215365,
          "rotation": 0,
          "target": "2-exam-room-2"
        },
        {
          "yaw": 2.58115285666251,
          "pitch": 0.3293224333186391,
          "rotation": 0,
          "target": "1-exam-room-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.464913479719339,
          "pitch": 0.5238584843440712,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Check-in Desk&nbsp;</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This is where patients check in to be seen&nbsp;</span>"
        },
        {
          "yaw": -3.0532050859545237,
          "pitch": 0.18112199486297875,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Refrigerator for Antibiotics</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Some antibiotics must be kept at a certain temperature</span>"
        },
        {
          "yaw": -1.579560790940274,
          "pitch": 0.6415225453280016,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Patient Waiting Chair</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This is where patients wait to see the doctor</span><br>"
        },
        {
          "yaw": -2.2031720276378692,
          "pitch": -1.4085578954175215,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Skylight</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Used to calm patients</span>"
        },
        {
          "yaw": -0.9271607958605195,
          "pitch": 0.4716186351521898,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Handicap Accessible Bathroom</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">The waiting chair folds up to allow access to this bathroom</span>"
        },
        {
          "yaw": 0.41891594744852867,
          "pitch": 0.6172317643269167,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Chair Holder</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Holds chair while the truck is in motion</span>"
        },
        {
          "yaw": -0.10718057075518672,
          "pitch": 0.21308598581019567,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Entrance</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Front door to the truck</span>"
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
          "yaw": -1.0134404510457387,
          "pitch": 0.3026855309471923,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6158121445706932,
          "pitch": 0.16097704800192325,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Handicap Accessible Entrance</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Patients are lifted to the height of the truck and directly into the exam room</span>"
        },
        {
          "yaw": -2.094345320067003,
          "pitch": 0.07928008595688851,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Doctor Tools</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Blood Pressure Monitor, Thermometer, Otoscope, Ophthalmoscope and Thermometer</span>"
        },
        {
          "yaw": -1.35058126296153,
          "pitch": 0.11264148438879218,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Privacy Curtain</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Privacy curtain that covers the exam chair</span>"
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
          "yaw": 2.1541215294639358,
          "pitch": 0.12512156563740007,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1074074135850935,
          "pitch": 0.40953383014070255,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Door to Lobby</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Door can be shut for privacy while seeing patients</span>"
        },
        {
          "yaw": -1.7416481959433359,
          "pitch": -1.4387760409740444,
          "title": "Skylight&nbsp;",
          "text": "Used to calm patients"
        },
        {
          "yaw": -1.953418138678554,
          "pitch": 0.013674131249729271,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;\">Doctor Tools</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Blood Pressure Monitor, Thermometer, Otoscope, Ophthalmoscope and Thermometer</span>"
        },
        {
          "yaw": -1.4172280919553302,
          "pitch": -0.17293806898865682,
          "title": "Microwave",
          "text": "For staff use during long shifts"
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
