# tabsTitle

Tabs getting the route by title (have no idea why they are not just links to go along with the others)

# tabsBack

When you go back to another page from the page that has the tabs, route of tabs (url) still present (so are the actual tabs if you use push)

# tabsHidden
Navigating on a page with tabs directly the page will not have any tabs visible. (It works if the route is the main tab, if secondary the tabs are not visible)

# childRoutes

Issue with "child" routes still persist, dynamic routes can't be fully dynamic - Can replicate on your component (if we create the "child" routes)

```javascript
{ component: PageExample, name: "PageExample", segment: "Example" },
{ component: PageExample, name: "PageExample1", segment: "Example/:Param" },
{ component: PageExample, name: "PageExample2", segment: "Example/:Param/:Param1" },
```
