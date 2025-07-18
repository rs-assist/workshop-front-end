"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface NewOperationModalProps {
  open: boolean
  onClose: () => void
  onOperationCreated: () => void
}

interface CreateOperationData {
  name: string
  status: string
  priority: string
  description: string
  location: string
  agents: number
  startDate: string
  estimatedCompletion: string
  objectives: string[]
  progress: number
}

export function NewOperationModal({ open, onClose, onOperationCreated }: NewOperationModalProps) {
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState<CreateOperationData>({
    name: "",
    status: "planning",
    priority: "medium",
    description: "",
    location: "",
    agents: 1,
    startDate: "",
    estimatedCompletion: "",
    objectives: [],
    progress: 0
  })
  const [objectiveInput, setObjectiveInput] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.description || !formData.location) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsCreating(true)
    try {
      const response = await fetch('/api/operations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          objectives: JSON.stringify(formData.objectives),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create operation')
      }

      toast({
        title: "Operation Created",
        description: `Operation "${formData.name}" has been successfully created.`,
      })

      onClose()
      onOperationCreated()
      
      // Reset form
      setFormData({
        name: "",
        status: "planning",
        priority: "medium",
        description: "",
        location: "",
        agents: 1,
        startDate: "",
        estimatedCompletion: "",
        objectives: [],
        progress: 0
      })
      setObjectiveInput("")
    } catch (error) {
      console.error('Error creating operation:', error)
      toast({
        title: "Error",
        description: "Failed to create operation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsCreating(false)
    }
  }

  const addObjective = () => {
    if (objectiveInput.trim()) {
      setFormData(prev => ({
        ...prev,
        objectives: [...prev.objectives, objectiveInput.trim()]
      }))
      setObjectiveInput("")
    }
  }

  const removeObjective = (index: number) => {
    setFormData(prev => ({
      ...prev,
      objectives: prev.objectives.filter((_, i) => i !== index)
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 border-neutral-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-orange-500 font-mono tracking-wider">
            CREATE NEW OPERATION
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-neutral-300 text-xs uppercase tracking-wider">
                Operation Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-neutral-800 border-neutral-700 text-white"
                placeholder="Enter operation name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-neutral-300 text-xs uppercase tracking-wider">
                Location *
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="bg-neutral-800 border-neutral-700 text-white"
                placeholder="Operation location"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status" className="text-neutral-300 text-xs uppercase tracking-wider">
                Status
              </Label>
              <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on_hold">On Hold</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority" className="text-neutral-300 text-xs uppercase tracking-wider">
                Priority
              </Label>
              <Select value={formData.priority} onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}>
                <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="agents" className="text-neutral-300 text-xs uppercase tracking-wider">
                Agents Required
              </Label>
              <Input
                id="agents"
                type="number"
                min="1"
                value={formData.agents}
                onChange={(e) => setFormData(prev => ({ ...prev, agents: parseInt(e.target.value) || 1 }))}
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-neutral-300 text-xs uppercase tracking-wider">
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estimatedCompletion" className="text-neutral-300 text-xs uppercase tracking-wider">
                Estimated Completion
              </Label>
              <Input
                id="estimatedCompletion"
                type="date"
                value={formData.estimatedCompletion}
                onChange={(e) => setFormData(prev => ({ ...prev, estimatedCompletion: e.target.value }))}
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-neutral-300 text-xs uppercase tracking-wider">
              Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-neutral-800 border-neutral-700 text-white min-h-[80px]"
              placeholder="Operation description and details"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-neutral-300 text-xs uppercase tracking-wider">
              Objectives
            </Label>
            <div className="flex gap-2">
              <Input
                value={objectiveInput}
                onChange={(e) => setObjectiveInput(e.target.value)}
                className="bg-neutral-800 border-neutral-700 text-white"
                placeholder="Add objective"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addObjective())}
              />
              <Button type="button" onClick={addObjective} variant="outline" className="border-neutral-700">
                Add
              </Button>
            </div>
            {formData.objectives.length > 0 && (
              <div className="space-y-1">
                {formData.objectives.map((objective, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-neutral-400">•</span>
                    <span className="flex-1 text-neutral-300">{objective}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeObjective(index)}
                      className="text-red-400 hover:text-red-300 h-6 w-6 p-0"
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4 border-t border-neutral-700">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-neutral-700 text-neutral-400 hover:bg-neutral-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isCreating}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isCreating ? "Creating..." : "Create Operation"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
