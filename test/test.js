import { expect } from 'chai'
import encode from '../index'

const input = 'This is a test string 123 21.!'

describe('baseline tests', () => {
  it('encode correctly', () => {
    const encodedString = encode(input)
    expect(encodedString).to.equal('sg3ry3ry1ys2rsyrsq3mfy321y12.!')
  })
})