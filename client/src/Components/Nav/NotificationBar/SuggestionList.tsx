import { Link } from "react-router-dom";
import { contactList } from "../../../constants/users";
import { SuggestionItem } from "./SuggestionItem";

export const SugestionList = () => {
  const showAmount = 5;
  return (
    <div className="suggestion-list">
      <p className="header">Suggestions for you</p>
      {contactList.slice(0, showAmount).map((contact) => (
        <SuggestionItem key={contact.uid} contact={contact} />
      ))}
      {contactList.length > showAmount && (
        <Link to="#" className="link-view-all">
          View All
        </Link>
      )}
    </div>
  );
};
