import React from "react";
import { Link } from "react-router-dom";
import * as _helper from "../actions/_helper";


// _NOTE: This was a fun experiment but it looks like I need to learn more about react router, I worked under A LOT of assumptions...
const LinkButton = ({ to, className, style, prefix, suffix, allCaps, needSlug })=> {
  let name = !!needSlug ? _helper.slugify(to)  : to;
  prefix = typeof prefix === 'undefined' ? "" : prefix;
  suffix = typeof suffix === 'undefined' ? "" : suffix;
  name = !!!allCaps ? name[1].toUpperCase() + name.substring(2) : name.split("/")[1].toUpperCase();
  return (
    <div className={className} style={{...style}} value>
      <Link style={{color: "inherit", textDecoration: "none"}} to={to} >
        {prefix + name + suffix}
      </Link>
    </div>
  )
} 

export default LinkButton;