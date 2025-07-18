"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { PageTitle } from "@/app/components/page-title"
import { PageSubtitle } from "@/app/components/page-subtitle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, RotateCcw, Trophy } from "lucide-react"

interface Position {
  x: number
  y: number
}

const GRID_SIZE = 20
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_FOOD = { x: 15, y: 15 }
const INITIAL_DIRECTION = { x: 0, y: -1 }

export default function SnakeGamePage() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Position>(INITIAL_FOOD)
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [speed, setSpeed] = useState(150)

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    }
    return newFood
  }, [])

  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setFood(INITIAL_FOOD)
    setDirection(INITIAL_DIRECTION)
    setGameRunning(false)
    setGameOver(false)
    setScore(0)
    setSpeed(150)
  }

  const startGame = () => {
    if (gameOver) {
      resetGame()
    }
    setGameRunning(!gameRunning)
  }

  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return

    setSnake(currentSnake => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }
      
      head.x += direction.x
      head.y += direction.y

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true)
        setGameRunning(false)
        if (score > highScore) {
          setHighScore(score)
        }
        return currentSnake
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        setGameRunning(false)
        if (score > highScore) {
          setHighScore(score)
        }
        return currentSnake
      }

      newSnake.unshift(head)

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10)
        setFood(generateFood())
        // Increase speed slightly
        setSpeed(prev => Math.max(prev - 2, 50))
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameRunning, gameOver, score, highScore, generateFood])

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, speed)
    return () => clearInterval(gameInterval)
  }, [moveSnake, speed])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return

      switch (e.key.toLowerCase()) {
        case 'w':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 })
          break
        case 's':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 })
          break
        case 'a':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 })
          break
        case 'd':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 })
          break
        case ' ':
          e.preventDefault()
          setGameRunning(false)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [direction, gameRunning])

  return (
    <div className="p-6 space-y-6">
      {/* Game Over Animation */}
      {gameOver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="text-center animate-bounce">
            <div className="text-8xl mb-4">💀</div>
            <div className="text-red-500 text-4xl font-mono tracking-wider mb-4 animate-pulse">
              MISSION FAILED
            </div>
            <div className="text-orange-500 text-xl font-mono mb-4">
              SNAKE TERMINATED
            </div>
            <div className="text-white text-lg font-mono mb-6">
              FINAL SCORE: {score}
            </div>
            {score > highScore && (
              <div className="text-yellow-400 text-xl font-mono mb-4 animate-pulse">
                🏆 NEW HIGH SCORE! 🏆
              </div>
            )}
            <Button onClick={startGame} className="bg-orange-500 hover:bg-orange-600">
              RESTART MISSION
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <PageTitle>🐍 TACTICAL SNAKE OPERATIONS</PageTitle>
          <PageSubtitle>Stealth infiltration training simulator</PageSubtitle>
        </div>
        <div className="flex items-center gap-4 text-orange-500 font-mono">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span>HIGH: {highScore}</span>
          </div>
          <div>SCORE: {score}</div>
        </div>
      </div>

      {/* Game Controls */}
      <Card className="border-neutral-700 bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-orange-500 flex items-center gap-2">
            🎮 MISSION CONTROL
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              onClick={startGame}
              className={`${gameRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white`}
            >
              {gameRunning ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  PAUSE
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  {gameOver ? 'RESTART' : 'START'}
                </>
              )}
            </Button>
            
            <Button
              onClick={resetGame}
              variant="outline"
              className="border-neutral-700 text-neutral-300"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              RESET
            </Button>

            <div className="text-neutral-400 font-mono text-sm">
              Use WASD keys to navigate • Space to pause
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Board */}
      <Card className="border-neutral-700 bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-orange-500">🎯 OPERATION FIELD</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div 
            className="grid bg-neutral-800 border-2 border-orange-500 p-2 relative"
            style={{ 
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              width: '600px',
              height: '600px'
            }}
          >
            {/* Grid cells */}
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
              const x = index % GRID_SIZE
              const y = Math.floor(index / GRID_SIZE)
              
              const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y
              const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y)
              const isFood = food.x === x && food.y === y
              
              let cellClass = "border border-neutral-700 flex items-center justify-center text-lg"
              let content = ""
              
              if (isSnakeHead) {
                cellClass += " bg-orange-500 animate-pulse"
                content = "🟩"
              } else if (isSnakeBody) {
                cellClass += " bg-orange-600"
                content = "🟫"
              } else if (isFood) {
                cellClass += " bg-red-500 animate-ping"
                content = "🎯"
              } else {
                cellClass += " bg-neutral-900"
              }

              return (
                <div
                  key={index}
                  className={cellClass}
                  style={{ 
                    width: `${600 / GRID_SIZE}px`, 
                    height: `${600 / GRID_SIZE}px` 
                  }}
                >
                  {content}
                </div>
              )
            })}
            
            {/* Game status overlay */}
            {!gameRunning && !gameOver && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-2xl font-mono mb-4">
                    🐍 READY FOR DEPLOYMENT
                  </div>
                  <div className="text-neutral-400 font-mono">
                    Press START to begin mission
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Game Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-neutral-700 bg-neutral-900">
          <CardContent className="p-4 text-center">
            <div className="text-orange-500 text-2xl font-mono">{score}</div>
            <div className="text-neutral-400 text-sm">CURRENT SCORE</div>
          </CardContent>
        </Card>
        
        <Card className="border-neutral-700 bg-neutral-900">
          <CardContent className="p-4 text-center">
            <div className="text-green-500 text-2xl font-mono">{snake.length}</div>
            <div className="text-neutral-400 text-sm">SNAKE LENGTH</div>
          </CardContent>
        </Card>
        
        <Card className="border-neutral-700 bg-neutral-900">
          <CardContent className="p-4 text-center">
            <div className="text-blue-500 text-2xl font-mono">{Math.round((200 - speed) / 2)}</div>
            <div className="text-neutral-400 text-sm">SPEED LEVEL</div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card className="border-neutral-700 bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-orange-500">📋 MISSION BRIEFING</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-300 font-mono text-sm">
            <div>
              <h4 className="text-orange-400 mb-2">OBJECTIVES:</h4>
              <ul className="space-y-1">
                <li>• Collect red targets (🎯)</li>
                <li>• Avoid walls and self-collision</li>
                <li>• Survive as long as possible</li>
                <li>• Achieve maximum score</li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-400 mb-2">CONTROLS:</h4>
              <ul className="space-y-1">
                <li>• W/A/S/D keys to move</li>
                <li>• SPACE to pause/resume</li>
                <li>• Snake speeds up with each target</li>
                <li>• +10 points per target collected</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
