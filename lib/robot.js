'use strict';

function Robot() {
  // implement your solution here!
  this.at = function (x, y) {
    this.coordinates = [ x, y ]
  }

  this.orient = function (direction) {
    const dir = [ 'north', 'east', 'south', 'west' ]

    if (dir.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  this.place = function (position) {
    this.at(position['x'], position['y'])
    this.orient(position['direction'])
  }

  this.turnRight = function () {
    if (this.bearing === 'north') {
      this.bearing = 'east'
    } else if (this.bearing === 'east') {
      this.bearing = 'south'
    } else if (this.bearing === 'south') {
      this.bearing = 'west'
    } else if (this.bearing === 'west') {
      this.bearing = 'north'
    } else {
      throw new Error('Could not turn right')
    }
  }

  this.turnLeft = function () {
    if (this.bearing === 'north') {
      this.bearing = 'west'
    } else if (this.bearing === 'east') {
      this.bearing = 'north'
    } else if (this.bearing === 'south') {
      this.bearing = 'east'
    } else if (this.bearing === 'west') {
      this.bearing = 'south'
    } else {
      throw new Error('Could not turn left')
    }
  }

  this.advance = function () {
    if (this.bearing === 'north') {
      this.at(this.coordinates[0], this.coordinates[1] + 1)
    } else if (this.bearing === 'east') {
      this.at(this.coordinates[0] + 1, this.coordinates[1])
    } else if (this.bearing === 'south') {
      this.at(this.coordinates[0], this.coordinates[1] - 1)
    } else if (this.bearing === 'west') {
      this.at(this.coordinates[0] - 1, this.coordinates[1])
    } else {
      throw new Error('Could not advance')
    }
  }

  this.instructions = function (instructions) {
    return instructions.split('').map(function (instruction) {
      if (instruction === 'R') {
        return 'turnRight'
      } else if (instruction === 'L') {
        return 'turnLeft'
      } else if (instruction === 'A') {
        return 'advance'
      } else {
        return instruction
      }
    })
  }

  this.evaluate = function (commands) {
    this.instructions(commands).forEach(function (command) {
      this[command]()
    }.bind(this))
  }
}
