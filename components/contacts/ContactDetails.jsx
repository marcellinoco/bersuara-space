export default function ContactDetails({ contactDetails, className }) {
  return (
    <div className={`${className} flex flex-col items-center text-base`}>
      {/* Contact name */}
      <p className="font-semibold">
        {contactDetails.name}
      </p>
      
      {/* Contact address */}
      { contactDetails.address ? (
        <p>
          {contactDetails.address}
        </p>
      ) : null }

      <div className="flex flex-row">
        {/* Contact phone */}
        { contactDetails.phone ? (
          <p>
            Phone:
            {' '}
            <a href={`tel:${contactDetails.phone}`} className="text-purple">
              {contactDetails.phone}
            </a>
          </p>
        ) : null }

        {/* Contact e-mail */}
        { contactDetails.email ? (
          <p>
            {`${contactDetails.phone ? ", " : ""}Email: `}
            <a href={`mailto:${contactDetails.email}`} className="text-purple">
              {contactDetails.email}
            </a>
          </p>
        ) : null }
      </div>
    </div>
  )
}