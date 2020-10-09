from django.shortcuts import render


def react_view(request):
    context = {
        
    }

    return  render(request, 'react/react.html', context=context)

