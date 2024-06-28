// utils.js
export const formatDescription = (description) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  
    let formattedDescription = description
      .replace(urlRegex, '<a href="$&" target="_blank">$&</a>')
      .replace(emailRegex, '<a href="mailto:$&">$&</a>')
      .replace(/\n/g, '<br>');
  
    return formattedDescription;
  };
  