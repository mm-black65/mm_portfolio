export type Tag = "AI" | "IoT" | "Robotics" | "ML" | "CV" | "NLP" | "Embedded" | "Cloud"

export interface Project {
  id: string
  title: string
  description: string
  tags: Tag[]
  image: string
  category: "projects" | "ideas" | "hackathons"
  demoVideo?: string
  code: string
  futureScope?: string
  materials?: string[]
  challenges?: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: "cert-dl",
    title: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    year: "2025",
    credentialUrl: "#",
  },
  {
    id: "cert-ros",
    title: "ROS2 for Robotics Development",
    issuer: "The Construct",
    year: "2024",
    credentialUrl: "#",
  },
  {
    id: "cert-aws",
    title: "AWS Certified ML Specialty",
    issuer: "Amazon Web Services",
    year: "2024",
    credentialUrl: "#",
  },
  {
    id: "cert-tf",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
    credentialUrl: "#",
  },
  {
    id: "cert-pcb",
    title: "PCB Design with KiCad",
    issuer: "Udemy",
    year: "2023",
    credentialUrl: "#",
  },
  {
    id: "cert-embedded",
    title: "Embedded Systems Programming",
    issuer: "edX / UTAustinX",
    year: "2022",
    credentialUrl: "#",
  },
]

export const projects: Project[] = [
  {
    id: "autonomous-rover",
    title: "Autonomous Rover",
    description: "Self-navigating Mars rover prototype using SLAM and LiDAR. Built with ROS2 and custom path-planning algorithms for unknown terrain.",
    tags: ["Robotics", "AI", "Embedded"],
    image: "/images/project-robotics.jpg",
    category: "projects",
    futureScope: "Integrate multi-spectral imaging for soil analysis and deploy swarm coordination between multiple rovers for large-area mapping.",
    materials: ["Raspberry Pi 4", "RPLiDAR A1", "ROS2 Humble", "Arduino Mega", "L298N Motor Driver", "LiPo 11.1V Battery"],
    challenges: ["Real-time SLAM on limited compute", "Wheel slippage on sandy terrain", "GPS-denied navigation indoors"],
    code: `import rospy
from nav_msgs.msg import OccupancyGrid
from geometry_msgs.msg import Twist

class RoverController:
    def __init__(self):
        rospy.init_node('rover_ctrl')
        self.cmd_vel = rospy.Publisher(
            '/cmd_vel', Twist, queue_size=10
        )
        self.map_sub = rospy.Subscriber(
            '/map', OccupancyGrid, self.map_cb
        )
        self.grid = None

    def map_cb(self, data):
        self.grid = data
        self.plan_path()

    def plan_path(self):
        # A* path planning on occupancy grid
        twist = Twist()
        twist.linear.x = 0.5
        twist.angular.z = self.compute_steering()
        self.cmd_vel.publish(twist)

    def compute_steering(self):
        if self.grid is None:
            return 0.0
        # Obstacle avoidance logic
        return 0.15

if __name__ == '__main__':
    ctrl = RoverController()
    rospy.spin()`,
  },
  {
    id: "neural-gesture",
    title: "Neural Gesture Control",
    description: "Real-time hand gesture recognition using MediaPipe and a custom CNN model for robotic arm teleoperation.",
    tags: ["AI", "CV", "ML"],
    image: "/images/project-cv.jpg",
    category: "projects",
    futureScope: "Extend to full-body pose estimation for VR teleoperation of humanoid robots in hazardous environments.",
    materials: ["Webcam 1080p", "MediaPipe", "TensorFlow Lite", "Python 3.10", "OpenCV"],
    challenges: ["Low latency inference on CPU", "Handling occlusion and variable lighting", "Mapping 2D gestures to 6-DOF arm commands"],
    code: `import cv2
import mediapipe as mp
import tensorflow as tf

class GestureController:
    def __init__(self, model_path):
        self.hands = mp.solutions.hands.Hands(
            max_num_hands=1,
            min_detection_confidence=0.7
        )
        self.model = tf.lite.Interpreter(
            model_path=model_path
        )
        self.model.allocate_tensors()

    def process_frame(self, frame):
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.hands.process(rgb)

        if results.multi_hand_landmarks:
            landmarks = results.multi_hand_landmarks[0]
            features = self.extract_features(landmarks)
            gesture = self.classify(features)
            return gesture
        return None

    def extract_features(self, landmarks):
        return [lm.x for lm in landmarks.landmark]

    def classify(self, features):
        input_det = self.model.get_input_details()
        self.model.set_tensor(
            input_det[0]['index'], [features]
        )
        self.model.invoke()
        return self.model.get_tensor(
            self.model.get_output_details()[0]['index']
        )`,
  },
  {
    id: "smart-greenhouse",
    title: "Smart Greenhouse",
    description: "IoT-based automated greenhouse with environmental sensors, ML-driven irrigation, and real-time monitoring dashboard.",
    tags: ["IoT", "ML", "Cloud"],
    image: "/images/project-iot.jpg",
    category: "projects",
    futureScope: "Add drone-based crop surveillance, integrate predictive weather models, and deploy on a solar-powered edge network.",
    materials: ["ESP32", "DHT22 Sensor", "Soil Moisture Sensor", "Relay Module", "Firebase", "React Dashboard"],
    challenges: ["Sensor drift over time requiring recalibration", "WiFi reliability in greenhouse RF environment", "Power management for 24/7 operation"],
    code: `from machine import Pin, ADC
import network
import ujson
import urequests

class GreenhouseNode:
    MOISTURE_PIN = 34
    TEMP_PIN = 35
    PUMP_PIN = 26

    def __init__(self, api_url):
        self.moisture = ADC(Pin(self.MOISTURE_PIN))
        self.temp = ADC(Pin(self.TEMP_PIN))
        self.pump = Pin(self.PUMP_PIN, Pin.OUT)
        self.api_url = api_url
        self.connect_wifi()

    def connect_wifi(self):
        wlan = network.WLAN(network.STA_IF)
        wlan.active(True)
        wlan.connect('GreenNet', 'password')

    def read_sensors(self):
        return {
            'moisture': self.moisture.read(),
            'temperature': self.temp.read(),
            'timestamp': time.time()
        }

    def should_irrigate(self, data):
        return data['moisture'] < 2000

    def run(self):
        data = self.read_sensors()
        if self.should_irrigate(data):
            self.pump.value(1)
        urequests.post(
            self.api_url,
            json=ujson.dumps(data)
        )`,
  },
  {
    id: "drone-swarm",
    title: "Drone Swarm Intelligence",
    description: "Multi-agent drone coordination using decentralized consensus algorithms for search and rescue operations.",
    tags: ["Robotics", "AI", "Embedded"],
    image: "/images/project-drone.jpg",
    category: "projects",
    futureScope: "Implement real-time mesh networking between drones and integrate thermal + LiDAR sensors for disaster zone mapping.",
    materials: ["DJI Tello EDU x4", "Python DroneKit", "NumPy", "Custom PCB for inter-drone comms", "Gazebo Simulator"],
    challenges: ["Maintaining formation in wind", "Communication latency between agents", "Battery life limiting mission duration"],
    code: `import numpy as np
from dataclasses import dataclass

@dataclass
class DroneState:
    position: np.ndarray
    velocity: np.ndarray
    id: int

class SwarmController:
    def __init__(self, n_drones, area_bounds):
        self.drones = [
            DroneState(
                position=np.random.rand(3) * area_bounds,
                velocity=np.zeros(3),
                id=i
            ) for i in range(n_drones)
        ]
        self.separation_dist = 2.0
        self.cohesion_weight = 0.01
        self.alignment_weight = 0.1

    def update(self, dt=0.1):
        for drone in self.drones:
            neighbors = self.get_neighbors(drone)
            sep = self.separation(drone, neighbors)
            coh = self.cohesion(drone, neighbors)
            ali = self.alignment(drone, neighbors)
            drone.velocity += sep + coh + ali
            drone.position += drone.velocity * dt

    def get_neighbors(self, drone, radius=5.0):
        return [
            d for d in self.drones
            if d.id != drone.id
            and np.linalg.norm(
                d.position - drone.position
            ) < radius
        ]`,
  },
  {
    id: "nlp-research-assistant",
    title: "NLP Research Assistant",
    description: "AI-powered research paper analysis tool using transformer models for automated summarization and citation mapping.",
    tags: ["AI", "NLP", "ML"],
    image: "/images/project-ai.jpg",
    category: "ideas",
    futureScope: "Build a full literature review pipeline that auto-generates related work sections from a corpus of papers.",
    materials: ["Hugging Face Transformers", "BART-Large", "BERT-NER", "Python", "FastAPI"],
    challenges: ["Handling long documents exceeding model context length", "Citation format variability across publishers"],
    code: `from transformers import pipeline
from typing import List, Dict

class ResearchAssistant:
    def __init__(self):
        self.summarizer = pipeline(
            "summarization",
            model="facebook/bart-large-cnn"
        )
        self.ner = pipeline(
            "ner",
            model="dbmdz/bert-large-cased"
        )

    def analyze_paper(self, text: str) -> Dict:
        summary = self.summarizer(
            text,
            max_length=150,
            min_length=40,
            do_sample=False
        )[0]['summary_text']

        entities = self.ner(text)
        key_terms = self.extract_terms(entities)

        return {
            'summary': summary,
            'key_terms': key_terms,
            'citation_count': len(
                self.find_citations(text)
            ),
        }

    def extract_terms(self, entities):
        return list(set(
            e['word'] for e in entities
            if e['score'] > 0.9
        ))

    def find_citations(self, text):
        import re
        return re.findall(
            r'\\[\\d+\\]|\\([A-Z][a-z]+ et al\\.', text
        )`,
  },
  {
    id: "edge-ml-compiler",
    title: "Edge ML Compiler",
    description: "Custom compiler that optimizes neural network models for deployment on resource-constrained edge devices like ESP32.",
    tags: ["ML", "Embedded", "AI"],
    image: "/images/project-ai.jpg",
    category: "ideas",
    futureScope: "Support RISC-V targets and add automatic architecture search (NAS) for hardware-aware model design.",
    materials: ["PyTorch", "ONNX Runtime", "ESP-IDF", "C compiler toolchain", "Custom quantization library"],
    challenges: ["Maintaining accuracy after 8-bit quantization", "Mapping arbitrary ops to hardware-supported instructions"],
    code: `import torch
import torch.nn as nn

class ModelOptimizer:
    def __init__(self, model, target='esp32'):
        self.model = model
        self.target = target
        self.constraints = {
            'esp32': {
                'max_ram': 520 * 1024,
                'max_flash': 4 * 1024 * 1024,
                'ops': ['conv2d', 'relu', 'fc']
            }
        }

    def quantize(self, bits=8):
        quantized = torch.quantization.quantize_dynamic(
            self.model,
            {nn.Linear, nn.Conv2d},
            dtype=torch.qint8
        )
        return quantized

    def prune(self, amount=0.3):
        import torch.nn.utils.prune as prune
        for module in self.model.modules():
            if isinstance(module, nn.Conv2d):
                prune.l1_unstructured(
                    module, 'weight', amount
                )
        return self.model

    def estimate_size(self):
        param_size = sum(
            p.nelement() * p.element_size()
            for p in self.model.parameters()
        )
        return param_size`,
  },
  {
    id: "hack-rescue-bot",
    title: "RescueBot - HackMIT",
    description: "48-hour hackathon project: autonomous rescue robot with thermal imaging and voice-guided navigation. Won Best Hardware prize.",
    tags: ["Robotics", "CV", "AI"],
    image: "/images/project-hackathon.jpg",
    category: "hackathons",
    futureScope: "Ruggedize for real deployment, add GPS waypoint return, and integrate with first-responder communication networks.",
    materials: ["Arduino Mega", "MLX90640 Thermal Camera", "HC-SR04 Ultrasonic", "ESP32-CAM", "3D-Printed Chassis"],
    challenges: ["48-hour time constraint", "Thermal camera calibration", "Voice recognition in noisy environments"],
    code: `import cv2
import numpy as np
from thermal_camera import ThermalSensor

class RescueBot:
    BODY_TEMP_MIN = 35.0
    BODY_TEMP_MAX = 42.0

    def __init__(self):
        self.thermal = ThermalSensor()
        self.camera = cv2.VideoCapture(0)
        self.survivors_found = []

    def scan_area(self):
        thermal_frame = self.thermal.capture()
        rgb_frame = self.camera.read()[1]

        hot_spots = self.detect_bodies(thermal_frame)

        for spot in hot_spots:
            x, y, temp = spot
            if self.is_survivor(temp):
                self.survivors_found.append({
                    'position': (x, y),
                    'temperature': temp,
                    'visual': self.crop_region(
                        rgb_frame, x, y
                    )
                })
                self.alert_operator(spot)

    def detect_bodies(self, frame):
        mask = (frame > self.BODY_TEMP_MIN) & \\
               (frame < self.BODY_TEMP_MAX)
        contours = cv2.findContours(
            mask.astype(np.uint8),
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )
        return self.process_contours(contours)`,
  },
  {
    id: "hack-air-quality",
    title: "AirGuard - TreeHacks",
    description: "Real-time air quality monitoring network using distributed IoT sensors. ML-based pollution prediction with 94% accuracy.",
    tags: ["IoT", "ML", "Cloud"],
    image: "/images/project-iot.jpg",
    category: "hackathons",
    futureScope: "Deploy city-wide sensor mesh and build public-facing dashboard with pollution heatmaps and health advisories.",
    materials: ["PMS5003 Air Sensor", "BME280", "ESP8266", "InfluxDB", "Grafana", "Flask API"],
    challenges: ["Sensor cross-sensitivity to humidity", "Calibrating low-cost sensors against reference stations"],
    code: `import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor
from flask import Flask, jsonify

class AirQualityPredictor:
    def __init__(self):
        self.model = GradientBoostingRegressor(
            n_estimators=200,
            max_depth=5,
            learning_rate=0.1
        )
        self.features = [
            'pm25', 'pm10', 'no2',
            'temperature', 'humidity',
            'wind_speed', 'hour', 'day_of_week'
        ]

    def train(self, data_path):
        df = pd.read_csv(data_path)
        X = df[self.features]
        y = df['aqi']
        self.model.fit(X, y)
        score = self.model.score(X, y)
        print(f'R2 Score: {score:.4f}')

    def predict(self, sensor_data):
        features = pd.DataFrame(
            [sensor_data],
            columns=self.features
        )
        prediction = self.model.predict(features)
        return {
            'aqi': float(prediction[0]),
            'level': self.get_level(prediction[0])
        }

    def get_level(self, aqi):
        if aqi < 50: return 'Good'
        if aqi < 100: return 'Moderate'
        if aqi < 150: return 'Unhealthy'
        return 'Hazardous'`,
  },
]

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "TypeScript", "Rust", "MATLAB"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "Hugging Face"],
  },
  {
    category: "Robotics",
    items: ["ROS2", "Gazebo", "Arduino", "Raspberry Pi", "ESP32"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "SOLIDWORKS", "Fusion 360", "KiCad"],
  },
]
