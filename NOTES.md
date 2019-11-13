# Convert html to pug
Use following regexp with vim to replace

- *</tag\>* with *nothing*
- *<tag\>* with *tag*
- *<tag attribute1=value1 ...\>* with tag(attribute1=value1 ...)

```
%s/<\/\([^ ]\+\)>/\r/g
%s/<\([^!][^ ]\+\)>/\1\r/g
%s/<\([^ ]\+\) \?\([^>]*\)\?>/\1(\2)\r/g
```