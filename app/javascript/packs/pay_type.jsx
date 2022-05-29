import React from 'react';
import { createRoot } from 'react-dom/client';
import PayTypeSelector from 'pay-type-selector';

document.addEventListener('turbolinks:load', function(){
    const element = document.getElementById('pay_type_component');
    const root = createRoot(element);
    root.render(<PayTypeSelector />);
});