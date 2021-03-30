import ContactDetails from './ContactDetails'

export default function ContactsRegion({ regionName, contactsList, className }) {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <h2 className="text-lg font-bold">
        {regionName}
      </h2>

      { contactsList.map((contactDetails) => (
        <ContactDetails 
          key={contactDetails.name}
          contactDetails={contactDetails}
          className="mt-4"
        />
      )) }
    </div>
  )
}