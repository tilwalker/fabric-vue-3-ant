import { onBeforeUnmount } from 'vue';
import { KeydownEvent } from '@/enum/Event.enum';

const UseKeydown = (variable: string) => {
  const onKeydown = (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case KeydownEvent.TOP: {
        variable = 'top';
        break;
      }
      case KeydownEvent.RIGHT: {
        variable = 'right';
        break;
      }
      case KeydownEvent.BOTTOM: {
        variable = 'bottom';
        break;
      }
      case KeydownEvent.LEFT: {
        variable = 'left';
        break;
      }
      default: {
        variable = 'left';
        break;
      }
    }
    console.log(event.keyCode, 'keycode')
  };

  window.addEventListener('keydown', onKeydown);
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
  });
};

export default UseKeydown;