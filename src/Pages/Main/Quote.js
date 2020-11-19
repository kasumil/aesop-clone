import React from "react";
import "./Quote.scss";

export default function Quote() {
return (
    <div className="Quote">
      <blockquote className="quoteContent">
        <p className="quoteParagraph">
          ‘Know'st thou the land where the lemon-trees bloom?’
        </p>
        <p className="quoteAuthor">Johann Wolfgang von Goethe</p>
      </blockquote>
    </div>
  );
}