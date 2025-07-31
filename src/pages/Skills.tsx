import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    'Embedded': {
      icon: 'Cpu',
      color: 'text-blue-500',
      skills: [
        { name: 'C/C++', level: 95, experience: '8+ years', projects: 15 },
        { name: 'ARM Cortex-M', level: 92, experience: '6+ years', projects: 12 },
        { name: 'FreeRTOS', level: 85, experience: '5+ years', projects: 8 },
        { name: 'STM32', level: 88, experience: '4+ years', projects: 10 },
        { name: 'ESP32', level: 82, experience: '3+ years', projects: 6 },
        { name: 'Real-time Systems', level: 90, experience: '6+ years', projects: 14 },
        { name: 'PCB Design', level: 75, experience: '3+ years', projects: 5 },
        { name: 'Embedded Linux', level: 78, experience: '3+ years', projects: 4 }
      ]
    },
    'Backend': {
      icon: 'Server',
      color: 'text-green-500',
      skills: [
        { name: 'Rust', level: 88, experience: '4+ years', projects: 8 },
        { name: 'Python', level: 90, experience: '7+ years', projects: 20 },
        { name: 'PostgreSQL', level: 85, experience: '5+ years', projects: 12 },
        { name: 'Redis', level: 82, experience: '4+ years', projects: 10 },
        { name: 'Docker', level: 80, experience: '4+ years', projects: 15 },
        { name: 'Kubernetes', level: 75, experience: '2+ years', projects: 6 },
        { name: 'gRPC', level: 78, experience: '3+ years', projects: 7 },
        { name: 'Microservices', level: 83, experience: '4+ years', projects: 9 }
      ]
    },
    'Tools & DevOps': {
      icon: 'Wrench',
      color: 'text-purple-500',
      skills: [
        { name: 'Git', level: 92, experience: '8+ years', projects: 25 },
        { name: 'Linux', level: 88, experience: '7+ years', projects: 20 },
        { name: 'CI/CD', level: 80, experience: '4+ years', projects: 12 },
        { name: 'Monitoring', level: 75, experience: '3+ years', projects: 8 },
        { name: 'Terraform', level: 70, experience: '2+ years', projects: 4 },
        { name: 'AWS', level: 72, experience: '3+ years', projects: 6 },
        { name: 'Debugging', level: 95, experience: '8+ years', projects: 30 },
        { name: 'Performance Optimization', level: 87, experience: '6+ years', projects: 15 }
      ]
    },
    'Communication': {
      icon: 'Wifi',
      color: 'text-orange-500',
      skills: [
        { name: 'MQTT', level: 85, experience: '4+ years', projects: 8 },
        { name: 'LoRaWAN', level: 78, experience: '3+ years', projects: 5 },
        { name: 'CAN Bus', level: 82, experience: '4+ years', projects: 6 },
        { name: 'SPI/I2C', level: 88, experience: '6+ years', projects: 12 },
        { name: 'UART/RS485', level: 90, experience: '7+ years', projects: 15 },
        { name: 'Ethernet', level: 83, experience: '5+ years', projects: 10 },
        { name: 'WiFi/Bluetooth', level: 80, experience: '4+ years', projects: 8 },
        { name: 'Modbus', level: 75, experience: '3+ years', projects: 4 }
      ]
    }
  };

  const categories = ['All', ...Object.keys(skillCategories)];

  const getFilteredSkills = () => {
    if (selectedCategory === 'All') {
      return Object.entries(skillCategories).flatMap(([category, data]) =>
        data.skills.map(skill => ({ ...skill, category, color: data.color, icon: data.icon }))
      );
    }
    const categoryData = skillCategories[selectedCategory as keyof typeof skillCategories];
    return categoryData.skills.map(skill => ({ 
      ...skill, 
      category: selectedCategory, 
      color: categoryData.color, 
      icon: categoryData.icon 
    }));
  };

  const filteredSkills = getFilteredSkills();

  const getOverallStats = () => {
    const allSkills = Object.values(skillCategories).flatMap(cat => cat.skills);
    const avgLevel = Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length);
    const totalProjects = allSkills.reduce((sum, skill) => sum + skill.projects, 0);
    const totalSkills = allSkills.length;
    const expertSkills = allSkills.filter(skill => skill.level >= 85).length;
    
    return { avgLevel, totalProjects, totalSkills, expertSkills };
  };

  const stats = getOverallStats();

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
            Skills & Expertise
          </h1>
          <p className="text-muted-foreground">
            Technical skills and experience across embedded systems and backend development
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="animate-fade-in">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">
                {stats.totalSkills}
              </div>
              <p className="text-xs text-muted-foreground">Total Skills</p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in [animation-delay:100ms]">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">
                {stats.expertSkills}
              </div>
              <p className="text-xs text-muted-foreground">Expert Level</p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in [animation-delay:200ms]">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">
                {stats.avgLevel}%
              </div>
              <p className="text-xs text-muted-foreground">Avg Proficiency</p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in [animation-delay:300ms]">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">
                {stats.totalProjects}+
              </div>
              <p className="text-xs text-muted-foreground">Projects Done</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="animate-fade-in"
            >
              {category !== 'All' && skillCategories[category as keyof typeof skillCategories] && (
                <Icon 
                  name={skillCategories[category as keyof typeof skillCategories].icon as any} 
                  size={16} 
                  className="mr-2" 
                />
              )}
              {category}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={`${skill.category}-${skill.name}`}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-muted ${skill.color}`}>
                      <Icon name={skill.icon as any} size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">{skill.name}</h3>
                      <Badge variant="outline" className="text-xs mt-1">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-display font-bold text-primary">
                      {skill.level}%
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: animateProgress ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 50}ms`
                      }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Experience:</span>
                      <p className="font-medium">{skill.experience}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Projects:</span>
                      <p className="font-medium">{skill.projects}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Overview */}
        {selectedCategory === 'All' && (
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-display font-bold mb-6">Expertise Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skillCategories).map(([category, data], index) => (
                <Card 
                  key={category}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                  onClick={() => setSelectedCategory(category)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-muted mb-4 ${data.color}`}>
                      <Icon name={data.icon as any} size={24} />
                    </div>
                    <h3 className="font-display font-semibold mb-2">{category}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {data.skills.length} skills
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Avg: {Math.round(data.skills.reduce((sum, skill) => sum + skill.level, 0) / data.skills.length)}%
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Learning & Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-display font-bold mb-6">Currently Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="BookOpen" size={20} className="text-primary" />
                  <h3 className="font-display font-medium">WebAssembly</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Exploring WASM for high-performance web applications
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in [animation-delay:100ms]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Zap" size={20} className="text-primary" />
                  <h3 className="font-display font-medium">Machine Learning</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  ML algorithms for embedded systems optimization
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in [animation-delay:200ms]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Cloud" size={20} className="text-primary" />
                  <h3 className="font-display font-medium">Edge Computing</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Distributed computing at the network edge
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;