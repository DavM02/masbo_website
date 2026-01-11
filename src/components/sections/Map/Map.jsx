import './map.scss'


export default function Map() {
  return (
    <section
      id='map'>
      <div
        className='container'>
        <div
          id='map-wrapper'>
          <iframe

            title="map"
            src="https://yandex.com/map-widget/v1/?ll=30.244929%2C50.519851&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDQ1ODM1MTcwEl7Qo9C60YDQsNGX0L3QsCwg0JrQuNGX0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0JHRg9GH0LDQvdGB0YzQutC40Lkg0YDQsNC50L7QvSwg0IbRgNC_0ZbQvdGMIgoN6_TxQRU6FEpC&z=17.7&dragging=true"
            width="100%"
            height="502"
            allowFullScreen={true}
            style={{ position: 'relative' }}></iframe>
        </div>
      </div>
    </section>
  )
}
 