import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({ temp: 22, condition: 'Partly Cloudy', location: 'Moscow' });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'C/C++', level: 95, category: 'Embedded' },
    { name: 'Rust', level: 88, category: 'Backend' },
    { name: 'Python', level: 90, category: 'Backend' },
    { name: 'ARM Cortex', level: 92, category: 'Hardware' },
    { name: 'FreeRTOS', level: 85, category: 'Embedded' },
    { name: 'Docker', level: 80, category: 'DevOps' }
  ];

  const projects = [
    {
      id: 1,
      title: 'IoT Sensor Network',
      description: 'Distributed sensor system with ARM Cortex-M4 and LoRaWAN',
      tech: ['C++', 'ARM', 'LoRaWAN'],
      status: 'Production'
    },
    {
      id: 2,
      title: 'Real-time Data Pipeline',
      description: 'High-performance backend for processing sensor data',
      tech: ['Rust', 'Redis', 'PostgreSQL'],
      status: 'Active'
    },
    {
      id: 3,
      title: 'Firmware Update System',
      description: 'OTA update mechanism for embedded devices',
      tech: ['C', 'FreeRTOS', 'MQTT'],
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Developer Portfolio
          </h1>
          <p className="text-muted-foreground">Embedded & Backend Systems</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* About Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/img/2a7e5a02-7c0e-4c49-8d1c-af8a8aca2c27.jpg" 
                    alt="@w0vz avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-display font-semibold">@w0vz</h2>
                    <Badge variant="secondary">
                      <Icon name="Code" size={12} className="mr-1" />
                      Developer
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Embedded & Backend engineer focused on real-time systems, IoT solutions, 
                    and high-performance distributed architectures. Building the future one line of code at a time.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">C/C++</Badge>
                    <Badge variant="outline">Rust</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">ARM Cortex</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weather Card */}
          <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in [animation-delay:100ms]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="CloudSun" size={20} className="text-primary" />
                <h3 className="font-display font-medium">Weather</h3>
              </div>
              <div className="text-2xl font-display font-semibold mb-1">
                {weather.temp}°C
              </div>
              <p className="text-sm text-muted-foreground mb-1">{weather.condition}</p>
              <p className="text-xs text-muted-foreground">{weather.location}</p>
            </CardContent>
          </Card>

          {/* Time Card */}
          <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in [animation-delay:200ms]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Clock" size={20} className="text-primary" />
                <h3 className="font-display font-medium">Local Time</h3>
              </div>
              <div className="text-2xl font-display font-semibold mb-1">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour12: false, 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
              <p className="text-sm text-muted-foreground">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 hover:shadow-lg transition-all duration-300 animate-fade-in [animation-delay:300ms]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Zap" size={20} className="text-primary" />
                <h3 className="font-display font-medium">Core Skills</h3>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.slice(0, 4).map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${400 + index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-4 hover:shadow-lg transition-all duration-300 animate-fade-in [animation-delay:400ms]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="FolderCode" size={20} className="text-primary" />
                <h3 className="font-display font-medium">Featured Projects</h3>
                <Button variant="ghost" size="sm" className="ml-auto">
                  View All
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="p-4 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer animate-slide-in-up group"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <Badge 
                        variant={project.status === 'Production' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Github" size={16} className="mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={16} className="mr-2" />
                Contact
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Resume
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;