export const Contacts = ({ data, deleteContact }) => {
  return (
    data.length > 0 && (
      <ul>
        {data.map(({id,name,number}) => (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" data-id={id} onClick={deleteContact}>
              delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};
