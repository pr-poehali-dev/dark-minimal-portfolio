import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'IoT Sensor Network',
      description: 'Distributed sensor system with ARM Cortex-M4 processors and LoRaWAN connectivity. Handles real-time data collection from environmental sensors across industrial facilities.',
      longDescription: 'This project implements a scalable IoT infrastructure for environmental monitoring in industrial settings. The system consists of sensor nodes built around ARM Cortex-M4 microcontrollers, featuring low-power operation and robust wireless communication via LoRaWAN protocol.',
      tech: ['C++', 'ARM Cortex-M4', 'LoRaWAN', 'FreeRTOS', 'STM32'],
      category: 'Embedded',
      status: 'Production',
      duration: '8 months',
      impact: '40+ sensors deployed',
      github: 'https://github.com/w0vz/iot-sensor-network',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80'
    },
    {
      id: 2,
      title: 'Real-time Data Pipeline',
      description: 'High-performance backend system for processing sensor data with sub-millisecond latency using Rust and Redis.',
      longDescription: 'A high-throughput data processing pipeline built with Rust, designed to handle millions of sensor readings per second. Features real-time analytics, data validation, and automatic scaling based on load.',
      tech: ['Rust', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
      category: 'Backend',
      status: 'Active',
      duration: '6 months',
      impact: '2M+ messages/sec',
      github: 'https://github.com/w0vz/realtime-pipeline',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
    },
    {
      id: 3,
      title: 'Firmware Update System',
      description: 'OTA update mechanism for embedded devices with rollback capabilities and secure authentication.',
      longDescription: 'Secure over-the-air firmware update system supporting multiple device types. Includes differential updates, rollback mechanisms, and encrypted communication channels.',
      tech: ['C', 'FreeRTOS', 'MQTT', 'mbedTLS', 'Python'],
      category: 'Embedded',
      status: 'Completed',
      duration: '4 months',
      impact: '1000+ devices updated',
      github: 'https://github.com/w0vz/ota-updater',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
    },
    {
      id: 4,
      title: 'Distributed Cache System',
      description: 'Custom distributed caching solution with automatic sharding and replication for high-availability applications.',
      longDescription: 'A distributed caching system built from scratch in Rust, featuring consistent hashing, automatic replication, and fault tolerance. Designed for high-performance applications requiring sub-millisecond response times.',
      tech: ['Rust', 'gRPC', 'Raft Consensus', 'Docker'],
      category: 'Backend',
      status: 'Active',
      duration: '10 months',
      impact: '99.99% uptime',
      github: 'https://github.com/w0vz/distributed-cache',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
    },
    {
      id: 5,
      title: 'Motor Control System',
      description: 'Precision motor control system for robotic applications with real-time feedback and adaptive algorithms.',
      longDescription: 'Advanced motor control system for industrial robotics, featuring PID control algorithms, encoder feedback, and safety mechanisms. Supports multiple motor types and communication protocols.',
      tech: ['C++', 'ARM Cortex-M7', 'CAN Bus', 'Real-time Linux'],
      category: 'Embedded',
      status: 'Production',
      duration: '12 months',
      impact: '50+ robots deployed',
      github: 'https://github.com/w0vz/motor-control',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80'
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'High-performance API gateway with rate limiting, authentication, and request routing for microservices.',
      longDescription: 'A robust API gateway built in Rust, handling authentication, rate limiting, request routing, and load balancing for microservice architectures. Features real-time monitoring and analytics.',
      tech: ['Rust', 'Actix-web', 'Redis', 'JWT', 'Prometheus'],
      category: 'Backend',
      status: 'Active',
      duration: '5 months',
      impact: '10K+ req/sec',
      github: 'https://github.com/w0vz/api-gateway',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80'
    }
  ];

  const categories = ['All', 'Embedded', 'Backend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Back to Home
              </a>
            </Button>
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Projects
          </h1>
          <p className="text-muted-foreground">
            Embedded systems and backend solutions I've built
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="animate-fade-in"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Production' ? 'default' : 'secondary'}
                      className="bg-background/90 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Impact:</span>
                      <p className="font-medium">{project.impact}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="ExternalLink" size={14} className="mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Icon name="Github" size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">6</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">4</div>
              <p className="text-sm text-muted-foreground">In Production</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">15+</div>
              <p className="text-sm text-muted-foreground">Technologies Used</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">2M+</div>
              <p className="text-sm text-muted-foreground">Data Points Processed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;