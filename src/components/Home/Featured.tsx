import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { properties } from '../../data/Property'
import Cart from '../Cart'


export default function Featured() {
  return (
    <section className="py-16 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Propriétés en Vedette</h2>
              <p className="text-muted-foreground mt-2">Découvrez notre sélection de propriétés premium</p>
            </div>
            <button  className="" >
              <Link to="/properties" className="flex items-center py-2 px-4 h-10 gap-2 rounded-md text-sm justify-center  font-medium border hover:bg-slate-50  ">
                Voir toutes les propriétés
                <ArrowRight className="h-4 w-4" />
              </Link>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 3).map((property) => (
              <Cart key={property.id} {...property} />
            ))}
          </div>
        </section>
  )
}
