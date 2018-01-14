import { keccak256 } from 'js-sha3';

function hashRandom(random, participant) {
  const hasher = new keccak256.create(256); // eslint-disable-line new-cap

  const randomHex = random.substr(2);
  const randomBuffer = Buffer.from([randomHex]);
  hasher.update(randomBuffer.toString('hex'));

  const participantHex = participant.substr(2);
  const participantBuffer = Buffer.from([participantHex]);
  hasher.update(participantBuffer.toString('hex'));

  return `0x${hasher.hex()}`;
}

export default hashRandom;