import { Serializer, Deserializer } from 'jsonapi-serializer';

export default {
  serializer: new Serializer('cuboid', {
    attributes: ['width', 'height', 'depth', 'bag'],
    bag: {
      ref: 'id',
      attributes: ['volume'],
    },
  }),
  deserializer: new Deserializer(),
};