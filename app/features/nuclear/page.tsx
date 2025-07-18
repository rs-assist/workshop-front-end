"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PageTitle } from "@/app/components/page-title"
import { PageSubtitle } from "@/app/components/page-subtitle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, AlertTriangle, Target, MapPin } from "lucide-react"

export default function NuclearStrikePage() {
  const [targetLocation, setTargetLocation] = useState("")
  const [warheadType, setWarheadType] = useState("")
  const [launchAnimation, setLaunchAnimation] = useState(false)
  const [confirmationPhase, setConfirmationPhase] = useState(0)
  const [mapAnimation, setMapAnimation] = useState(false)
  const [targetCoords, setTargetCoords] = useState({ x: 50, y: 50 })
  const [boomAnimation, setBoomAnimation] = useState(false)

  const handleLaunch = () => {
    if (confirmationPhase < 2) {
      setConfirmationPhase(confirmationPhase + 1)
      return
    }
    
    // Generate random coordinates for target
    const randomX = Math.random() * 80 + 10 // 10-90% to avoid edges
    const randomY = Math.random() * 60 + 20 // 20-80% to avoid edges
    setTargetCoords({ x: randomX, y: randomY })
    
    setMapAnimation(true)
    
    // Start launch animation after map animation
    setTimeout(() => {
      setMapAnimation(false)
      setLaunchAnimation(true)
    }, 4000)
    
    // Start boom animation after launch animation
    setTimeout(() => {
      setLaunchAnimation(false)
      setBoomAnimation(true)
    }, 8000)
    
    // Reset after full animation sequence
    setTimeout(() => {
      setBoomAnimation(false)
      setConfirmationPhase(0)
      setTargetLocation("")
      setWarheadType("")
    }, 15000)
  }

  const resetConfirmation = () => {
    setConfirmationPhase(0)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Map Targeting Animation */}
      {mapAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* World Map */}
            <div className="relative w-4/5 h-3/5 bg-gradient-to-b from-blue-900 to-blue-800 rounded-lg border-2 border-green-500 animate-pulse">
              {/* Map Grid */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(20)].map((_, i) => (
                  <div key={`v-${i}`} className="absolute w-px bg-green-400 h-full animate-pulse" style={{ left: `${i * 5}%` }} />
                ))}
                {[...Array(12)].map((_, i) => (
                  <div key={`h-${i}`} className="absolute h-px bg-green-400 w-full animate-pulse" style={{ top: `${i * 8.33}%` }} />
                ))}
              </div>
              
              {/* Continents (simplified shapes) */}
              <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-green-600 rounded animate-pulse opacity-80"></div>
              <div className="absolute top-1/3 left-1/2 w-20 h-16 bg-green-600 rounded animate-pulse opacity-80"></div>
              <div className="absolute top-1/2 left-1/6 w-12 h-8 bg-green-600 rounded animate-pulse opacity-80"></div>
              <div className="absolute bottom-1/4 right-1/4 w-14 h-10 bg-green-600 rounded animate-pulse opacity-80"></div>
              
              {/* Scanning Lines */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-px bg-red-500 animate-ping" style={{ 
                  top: `${targetCoords.y}%`,
                  boxShadow: '0 0 20px #ef4444'
                }}></div>
                <div className="absolute h-full w-px bg-red-500 animate-ping" style={{ 
                  left: `${targetCoords.x}%`,
                  boxShadow: '0 0 20px #ef4444'
                }}></div>
              </div>
              
              {/* Target Crosshair */}
              <div 
                className="absolute w-8 h-8 border-2 border-red-500 animate-pulse transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${targetCoords.x}%`, 
                  top: `${targetCoords.y}%`,
                  boxShadow: '0 0 30px #ef4444'
                }}
              >
                <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-red-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-red-500 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Radar Sweep */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-conic from-transparent via-green-500/20 to-transparent animate-spin origin-center"></div>
              </div>
            </div>
            
            {/* UI Elements */}
            <div className="absolute top-10 left-10 text-green-400 font-mono">
              <div className="text-2xl mb-2">🎯 TARGET ACQUISITION</div>
              <div className="text-sm space-y-1">
                <div>COORDINATES: {targetCoords.x.toFixed(1)}°, {targetCoords.y.toFixed(1)}°</div>
                <div>TARGET: {targetLocation}</div>
                <div>STATUS: LOCKED ✅</div>
                <div className="animate-pulse text-red-400">MISSILE INCOMING...</div>
              </div>
            </div>
            
            <div className="absolute top-10 right-10 text-orange-400 font-mono text-right">
              <div className="text-lg mb-2">⚠️ LAUNCH SEQUENCE</div>
              <div className="text-sm space-y-1">
                <div>WARHEAD: {warheadType.toUpperCase()}</div>
                <div>FLIGHT TIME: 15 MIN</div>
                <div>YIELD: CLASSIFIED</div>
                <div className="animate-bounce text-red-500">🚀 MISSILE ACTIVE</div>
              </div>
            </div>
            
            {/* Missile Trajectory */}
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute w-3 h-3 bg-orange-500 rounded-full"
                style={{
                  left: '10%',
                  top: '20%',
                  boxShadow: '0 0 20px #f97316, 0 0 40px #f97316',
                  animation: 'missile-flight 4s linear infinite'
                }}
              >
                <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping"></div>
                <div className="absolute -inset-1 bg-red-500 rounded-full animate-pulse opacity-50"></div>
                {/* Missile Trail */}
                <div className="absolute -left-8 top-1/2 w-8 h-px bg-gradient-to-r from-transparent to-orange-500 transform -translate-y-1/2"></div>
                <div className="absolute -left-6 top-1/2 w-6 h-px bg-gradient-to-r from-transparent to-red-500 transform -translate-y-1/2 opacity-70"></div>
              </div>
              
              {/* Multiple Missiles for Effect */}
              <div 
                className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-60"
                style={{
                  left: '8%',
                  top: '18%',
                  boxShadow: '0 0 15px #eab308',
                  animation: 'missile-flight 4.2s linear infinite'
                }}
              >
                <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
              
              <div 
                className="absolute w-2 h-2 bg-red-600 rounded-full opacity-60"
                style={{
                  left: '12%',
                  top: '22%',
                  boxShadow: '0 0 15px #dc2626',
                  animation: 'missile-flight 3.8s linear infinite'
                }}
              >
                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping"></div>
              </div>
            </div>
            
            {/* Bottom Status */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-red-500 text-xl font-mono animate-pulse mb-2">
                🎯 TARGET ACQUIRED 🎯
              </div>
              <div className="text-yellow-400 text-sm font-mono">
                Preparing for nuclear impact...
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nuclear Launch Animation Overlay */}
      {launchAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center">
            {/* Launch Sequence */}
            <div className="mb-8">
              <div className="text-8xl animate-bounce mb-4">🚀</div>
              <div className="text-red-500 text-3xl font-mono tracking-wider mb-4 animate-pulse">
                NUCLEAR LAUNCH INITIATED
              </div>
              <div className="text-orange-500 text-xl font-mono mb-4">
                TARGET: {targetLocation}
              </div>
            </div>
            
            {/* Countdown */}
            <div className="text-6xl font-mono text-red-500 animate-pulse mb-6">
              💥 IMPACT IMMINENT 💥
            </div>
            
            {/* Explosion Effect */}
            <div className="text-9xl animate-ping">💥</div>
            <div className="absolute inset-0 bg-red-500 opacity-20 animate-pulse"></div>
            
            {/* Warning Text */}
            <div className="text-yellow-400 text-lg font-mono animate-bounce mt-4">
              ⚠️ THIS IS NOT A SIMULATION ⚠️
            </div>
          </div>
        </div>
      )}

      {/* Epic Boom Animation */}
      {boomAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
          {/* Multiple explosion layers */}
          <div className="absolute inset-0">
            {/* Flash effect */}
            <div className="absolute inset-0 bg-white animate-ping opacity-90"></div>
            <div className="absolute inset-0 bg-orange-500 animate-pulse opacity-70"></div>
            <div className="absolute inset-0 bg-red-500 animate-bounce opacity-50"></div>
            
            {/* Expanding shockwave rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-8 border-white rounded-full animate-ping opacity-80"></div>
              <div className="absolute w-64 h-64 border-4 border-orange-500 rounded-full animate-ping opacity-60"></div>
              <div className="absolute w-96 h-96 border-2 border-red-500 rounded-full animate-ping opacity-40"></div>
              <div className="absolute w-128 h-128 border border-yellow-500 rounded-full animate-ping opacity-20"></div>
            </div>
            
            {/* Multiple explosion emojis */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[20rem] animate-bounce">💥</div>
            </div>
            
            {/* Secondary explosions */}
            <div className="absolute top-1/4 left-1/4 text-8xl animate-ping">💥</div>
            <div className="absolute top-1/3 right-1/4 text-6xl animate-bounce delay-300">🔥</div>
            <div className="absolute bottom-1/4 left-1/3 text-7xl animate-pulse delay-500">💥</div>
            <div className="absolute bottom-1/3 right-1/3 text-5xl animate-ping delay-700">☢️</div>
            
            {/* Mushroom cloud formation */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="text-9xl animate-bounce">☁️</div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl animate-pulse">☁️</div>
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">☁️</div>
            </div>
            
            {/* Debris and particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                />
              ))}
              {[...Array(30)].map((_, i) => (
                <div
                  key={`fire-${i}`}
                  className="absolute w-3 h-3 bg-red-600 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${0.5 + Math.random() * 1}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Text overlay */}
          <div className="relative z-10 text-center">
            <div className="text-white text-6xl font-mono tracking-wider mb-8 animate-pulse">
              💥 BOOM! 💥
            </div>
            <div className="text-yellow-400 text-3xl font-mono tracking-wider mb-4 animate-bounce">
              NUCLEAR DETONATION
            </div>
            <div className="text-orange-500 text-xl font-mono mb-4 animate-pulse">
              TARGET: {targetLocation}
            </div>
            <div className="text-red-500 text-lg font-mono animate-ping">
              MISSION ACCOMPLISHED
            </div>
            
            {/* Impact statistics */}
            <div className="mt-8 text-neutral-300 font-mono text-sm space-y-2">
              <div className="animate-pulse">BLAST RADIUS: 50 KM</div>
              <div className="animate-pulse delay-300">TEMPERATURE: 100 MILLION °C</div>
              <div className="animate-pulse delay-500">YIELD: {warheadType.toUpperCase()}</div>
              <div className="animate-pulse delay-700 text-yellow-400">STATUS: TOTAL ANNIHILATION</div>
            </div>
          </div>
          
          {/* Screen shake effect */}
          <div className="absolute inset-0 bg-black opacity-20 animate-ping"></div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="text-red-500">
            <PageTitle>⚠️ NUCLEAR STRIKE COMMAND ⚠️</PageTitle>
          </div>
          <div className="text-red-400">
            <PageSubtitle>Ultimate weapon deployment system</PageSubtitle>
          </div>
        </div>
        <div className="flex items-center gap-2 text-red-500 animate-pulse">
          <AlertTriangle className="w-6 h-6" />
          <span className="font-mono text-sm">DEFCON 1</span>
        </div>
      </div>

      {/* Warning Banner */}
      <Card className="border-red-600 bg-red-950/20">
        <CardHeader>
          <CardTitle className="text-red-500 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            CLASSIFIED - AUTHORIZED PERSONNEL ONLY
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-400 font-mono text-sm">
            Nuclear weapons deployment requires triple authorization. This system is for simulation purposes only.
            Any unauthorized access will result in immediate security protocols activation.
          </p>
        </CardContent>
      </Card>

      {/* Launch Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Target Selection */}
        <Card className="border-neutral-700 bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-orange-500 flex items-center gap-2">
              <Target className="w-5 h-5" />
              TARGET COORDINATES
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location" className="text-neutral-300 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Target Location
              </Label>
              <Input
                id="location"
                value={targetLocation}
                onChange={(e) => setTargetLocation(e.target.value)}
                placeholder="Enter city, coordinates, or landmark..."
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-neutral-300">Warhead Type</Label>
              <Select value={warheadType} onValueChange={setWarheadType}>
                <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue placeholder="Select warhead..." />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectItem value="tactical">Tactical (5kt)</SelectItem>
                  <SelectItem value="strategic">Strategic (50kt)</SelectItem>
                  <SelectItem value="thermonuclear">Thermonuclear (1Mt)</SelectItem>
                  <SelectItem value="tsar">Tsar Bomba (50Mt) ☢️</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Launch Status */}
        <Card className="border-neutral-700 bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-orange-500 flex items-center gap-2">
              <Zap className="w-5 h-5 animate-pulse" />
              LAUNCH STATUS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Missile Status:</span>
                <span className="text-green-500">🟢 ARMED & READY</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Authorization Level:</span>
                <span className="text-yellow-500">⚠️ REQUIRES CONFIRMATION</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Target Acquired:</span>
                <span className={targetLocation ? "text-green-500" : "text-red-500"}>
                  {targetLocation ? "✅ LOCKED" : "❌ NO TARGET"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Launch Button */}
      <Card className="border-red-600 bg-red-950/10">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            {confirmationPhase === 0 && (
              <Button
                onClick={handleLaunch}
                disabled={!targetLocation || !warheadType}
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 animate-pulse"
              >
                <Zap className="w-5 h-5 mr-2" />
                INITIATE NUCLEAR STRIKE
              </Button>
            )}
            
            {confirmationPhase === 1 && (
              <div className="space-y-4">
                <p className="text-red-400 font-mono">⚠️ FIRST CONFIRMATION REQUIRED ⚠️</p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetConfirmation} variant="outline" className="border-neutral-700">
                    ABORT
                  </Button>
                  <Button onClick={handleLaunch} className="bg-red-600 hover:bg-red-700 animate-pulse">
                    CONFIRM LAUNCH
                  </Button>
                </div>
              </div>
            )}
            
            {confirmationPhase === 2 && (
              <div className="space-y-4">
                <p className="text-red-400 font-mono animate-pulse">🚨 FINAL CONFIRMATION REQUIRED 🚨</p>
                <p className="text-yellow-400 text-sm">This action cannot be undone!</p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetConfirmation} variant="outline" className="border-neutral-700">
                    ABORT MISSION
                  </Button>
                  <Button onClick={handleLaunch} className="bg-red-800 hover:bg-red-900 animate-bounce">
                    🚀 EXECUTE NUCLEAR STRIKE 🚀
                  </Button>
                </div>
              </div>
            )}
            
            {confirmationPhase === 0 && (
              <p className="text-neutral-500 text-xs font-mono">
                Multiple confirmations required for launch authorization
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes missile-flight {
          0% { 
            left: 10%; 
            top: 20%; 
            transform: scale(0.5) rotate(45deg);
          }
          50% { 
            left: 50%; 
            top: 40%; 
            transform: scale(1) rotate(45deg);
          }
          100% { 
            left: ${targetCoords.x}%; 
            top: ${targetCoords.y}%; 
            transform: scale(1.5) rotate(45deg);
          }
        }
        @keyframes explosion-wave {
          0% { 
            transform: scale(0);
            opacity: 1;
          }
          100% { 
            transform: scale(20);
            opacity: 0;
          }
        }
        @keyframes screen-shake {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-10px); }
          20% { transform: translateX(10px); }
          30% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          50% { transform: translateX(-10px); }
          60% { transform: translateX(10px); }
          70% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
          90% { transform: translateX(-10px); }
        }
        .w-128 { width: 32rem; }
        .h-128 { height: 32rem; }
      `}</style>
    </div>
  )
}
