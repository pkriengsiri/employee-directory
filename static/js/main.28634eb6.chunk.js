(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,s){},26:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(13),c=s.n(r),i=(s(24),s(0)),o=function(){return Object(i.jsxs)("header",{className:"has-text-centered",children:[Object(i.jsx)("h1",{className:"title is-1 has-text-white",children:"Employee Directory"}),Object(i.jsx)("h2",{className:"subtitle has-text-white",children:"View contact information for your team"})]})},l=s(3),d=s(14),m=s(15),u=s(19),h=s(18),j=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"column is-4 is-offset-4",children:Object(i.jsx)("input",{className:"input is-normal is-rounded",type:"text",placeholder:"Filter by name",name:"search",value:e.value,onChange:e.handleInputChange})})})},b=function(){return Object(i.jsxs)("article",{className:"container message is-hidden mt-3",children:[Object(i.jsx)("div",{className:"message-header",children:Object(i.jsx)("p",{children:"No results found!"})}),Object(i.jsx)("div",{className:"message-body",children:"Please refine your search!"})]})},f=s(16),O=function(e){var t=e.picture,s=e.name,a=e.phone,n=e.email,r=e.dob,c="".concat(s.first," ").concat(s.last),o="mailto:".concat(n),l=r.date.substring(0,10);return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:t.thumbnail,alt:c})}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:o,children:n})}),Object(i.jsx)("td",{children:l})]})},p=(s(26),function(e){var t=e.employeeList,s=e.handleSort,a=function(e){if("name-column"===e.target.id)document.getElementById("name-arrow").classList.remove("is-hidden");else if("dob-column"===e.target.id){document.getElementById("dob-arrow").classList.remove("is-hidden")}},n=function(e){if("name-column"===e.target.id)document.getElementById("name-arrow").classList.add("is-hidden");else if("dob-column"===e.target.id){document.getElementById("dob-arrow").classList.add("is-hidden")}};return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"column is-12",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("p",{className:"ml-3",children:"Click on column headings to sort by name or date of birth"}),Object(i.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Image"}),Object(i.jsxs)("th",{className:"sortable-column",id:"name-column",onClick:function(){s("Name")},onMouseOver:a,onMouseLeave:n,children:["Name ",Object(i.jsx)("i",{className:"fas fa-arrows-alt-v is-hidden arrow",id:"name-arrow"})]}),Object(i.jsx)("th",{children:"Phone"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{className:"sortable-column",id:"dob-column",onClick:function(){s("DOB")},onMouseOver:a,onMouseLeave:n,children:Object(i.jsxs)("abbr",{title:"Date of Birth",children:["DOB ",Object(i.jsx)("i",{className:"fas fa-arrows-alt-v is-hidden arrow",id:"dob-arrow"})]})})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(O,Object(f.a)({},e),e.id.value)}))})]})]})})})}),x=s(17),y=s.n(x),v=function(e){return y.a.get("https://randomuser.me/api/?results=50&nat=us")},g=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={filtered:!1,filteredEmployees:[],employeeList:[],search:"",sortDOB:"",sortName:""},e.handleInputChange=function(t){document.querySelector(".message").classList.add("is-hidden");var s=t.target,a=s.name,n=s.value;if(e.setState(Object(l.a)({},a,n)),""!==n){var r=e.state.employeeList.filter((function(e){return e.name.first.concat(" ",e.name.last).toLowerCase().trim().includes(n.toLowerCase().trim())}));console.log(r),e.setState({filtered:!0,filteredEmployees:r}),0===r.length&&document.querySelector(".message").classList.remove("is-hidden")}else e.setState({filtered:!1})},e.handleSort=function(t){if("Name"===t){if(""===e.state.sortName||"dsc"===e.state.sortName){var s=e.state.employeeList.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}));e.setState({employeeList:s,sortName:"asc"})}else if("asc"===e.state.sortName){var a=e.state.employeeList.sort((function(e,t){return t.name.last.localeCompare(e.name.last)}));e.setState({employeeList:a,sortName:"dsc"})}}else if("DOB"===t)if(""===e.state.sortDOB||"dsc"===e.state.sortDOB){var n=e.state.employeeList.sort((function(e,t){return e.dob.date.localeCompare(t.dob.date)}));e.setState({employeeList:n,sortDOB:"asc"})}else if("asc"===e.state.sortDOB){var r=e.state.employeeList.sort((function(e,t){return t.dob.date.localeCompare(e.dob.date)}));e.setState({employeeList:r,sortDOB:"dsc"})}},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({employeeList:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{handleInputChange:this.handleInputChange,value:this.state.search}),Object(i.jsx)(b,{}),Object(i.jsx)(p,{employeeList:this.state.filtered?this.state.filteredEmployees:this.state.employeeList,handleSort:this.handleSort})]})}}]),s}(a.Component);s(45);var N=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(g,{})]})};s(46);c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.28634eb6.chunk.js.map