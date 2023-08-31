import {onBeforeUnmount, onMounted} from 'vue'
// TODO Типизировать
export default function useDetectOutsideClick(component: any, callback: any) {
    if (!component) return
    const listener = (event: any) => {
        if (event.target !== component.value) {
            return
        }

        if (typeof callback === 'function') {
            callback()
        }
    }

    onMounted(() => {window.addEventListener('click', listener) })
    onBeforeUnmount(() => {window.removeEventListener('click', listener)})

    return {listener}
}