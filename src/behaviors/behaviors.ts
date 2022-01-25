import image from './generic/image';
import startbutton from './hud/startbutton';

let behaviors: Record<string, Function> = {
    'image':image,
    'startbutton':startbutton
}

export default behaviors;