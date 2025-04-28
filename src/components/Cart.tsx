import { Property } from '../data/types'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

export default function Cart(property:Property) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <img src={property.image || "/placeholder.svg"} alt={property.title} className="object-cover w-full h-full" />
        <div className="absolute top-2 left-2 rounded-full font-semibold text-xs py-0.5  px-2.5 text-primary-foreground bg-primary">{property.status}</div>
        <div  className="absolute top-2 right-2 rounded-full font-semibold text-sm py-0.5  px-2.5 text-secondary-foreground bg-secondary">
          {property.price} Dhs
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
        <div className="flex items-center gap-1 text-muted-foreground mt-1">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center p-2 bg-muted rounded">
            <p className="text-xs text-muted-foreground">Beds</p>
            <p className="font-medium">{property.beds}</p>
          </div>
          <div className="text-center p-2 bg-muted rounded">
            <p className="text-xs text-muted-foreground">Baths</p>
            <p className="font-medium">{property.baths}</p>
          </div>
          <div className="text-center p-2 bg-muted rounded">
            <p className="text-xs text-muted-foreground">m²</p>
            <p className="font-medium">{property.sqft}</p>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0 flex items-center">
          <Link to={`/properties/${property.id}`} className='flex items-center justify-center text-sm py-2 px-4 bg-background border rounded-md h-10 w-full font-medium '>View Details</Link>
      </div>
    </div>
  )
}
