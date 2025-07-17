import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'online':
    case 'active':
      return 'text-green-400';
    case 'offline':
      return 'text-red-400';
    case 'maintenance':
    case 'standby':
      return 'text-yellow-400';
    default:
      return 'text-gray-400';
  }
}

export function getRiskColor(risk: string) {
  switch (risk.toLowerCase()) {
    case 'low':
      return 'bg-green-500/20 text-green-400';
    case 'medium':
      return 'bg-yellow-500/20 text-yellow-400';
    case 'high':
      return 'bg-orange-500/20 text-orange-400';
    case 'critical':
      return 'bg-red-500/20 text-red-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
}

export function getPriorityColor(priority: string) {
  switch (priority.toLowerCase()) {
    case 'low':
      return 'bg-blue-500/20 text-blue-400';
    case 'medium':
      return 'bg-yellow-500/20 text-yellow-400';
    case 'high':
      return 'bg-orange-500/20 text-orange-400';
    case 'critical':
      return 'bg-red-500/20 text-red-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
}

export function getOperationStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-500/20 text-green-400';
    case 'completed':
      return 'bg-blue-500/20 text-blue-400';
    case 'planning':
      return 'bg-yellow-500/20 text-yellow-400';
    case 'on-hold':
      return 'bg-gray-500/20 text-gray-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
}

export function getClassificationColor(classification: string) {
  switch (classification.toLowerCase()) {
    case 'top-secret':
      return 'bg-red-500/20 text-red-400';
    case 'secret':
      return 'bg-orange-500/20 text-orange-400';
    case 'classified':
      return 'bg-yellow-500/20 text-yellow-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
}

export function getActivityLogColor(type: string) {
  switch (type.toLowerCase()) {
    case 'info':
      return 'text-blue-400';
    case 'success':
      return 'text-green-400';
    case 'warning':
      return 'text-yellow-400';
    case 'error':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
}
