import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const pinIcon = L.divIcon({
  className: 'location-map__pin',
  html: `
    <svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 29 17 29s17-16.25 17-29C34 7.6 26.4 0 17 0z" fill="#bd4492"/>
    </svg>
  `,
  iconSize: [34, 46],
  iconAnchor: [17, 46],
  popupAnchor: [0, -40],
})

export default function LocationMap({ lat, lng, label }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [lat, lng],
      zoom: 16,
      scrollWheelZoom: false,
    })
    mapRef.current = map

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    L.marker([lat, lng], { icon: pinIcon }).addTo(map).bindPopup(label)

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [lat, lng, label])

  return <div className="location-map" ref={containerRef} />
}
