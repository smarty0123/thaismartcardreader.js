'use strict'
const { EventEmitter } = require('events')

class Person extends EventEmitter {
  constructor() {
    super()
    this.cid = ''
    this.name = {
      en: '',
      th: '',
    }
    this.bod = {
      year: '',
      month: '',
      day: '',
    }
    this.expireDate = {
      year: '',
      month: '',
      day: '',
    }
    this.issueDate = {
      year: '',
      month: '',
      day: '',
    }
    this.issuer = ''
    this.address = ''
    this.gender = ''
  }

  getCID() {
    return this.cid
  }
  setCID(cid) {
    this.cid = cid
  }
  setNameEN(name) {
    this.name.en = name
  }
  setNameTH(name) {
    this.name.th = name
  }
  setBOD(bod = "") {
    this.bod = this.extractDateToObject(bod)
  }

  extractDateToObject(dateString) {
    let obj = {
      yaer: "",
      month: "",
      day: "",
    }
    obj.year = dateString.substr(0, 4)
    obj.month = dateString.substr(4, 2)
    obj.day = dateString.substr(6, 2)
    return obj
  }

  setGender(gender = '') {
    if(gender == '1') gender = 'Male'
    else if(gender == '2') gender = 'Female'
    this.gender = gender
  }

  setExpireDate(expireDate) {
    this.expireDate = this.extractDateToObject(expireDate)
  }

  setIssueDate(issueDate) {
    this.issueDate = this.extractDateToObject(issueDate)
  }

  setAddress(address = '') {
    this.address = address
  }

  setIssuer(issuer = '') {
    this.issuer = issuer
  }
}

module.exports = Person