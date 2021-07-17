function Bubble()
{
    c_delay=0;
    let min = 0;
    let max = array_size-1;
    let len = array_size-2;

    div_update(divs[min],div_sizes[min],"yellow");
    div_update(divs[max],div_sizes[max],"yellow"); 
    if(div_sizes[min] > div_sizes[max]){ // arr[min] < arr[max]
        
        div_update(divs[min],div_sizes[min],"red");
        div_update(divs[max],div_sizes[max],"red");
        
        var temp=div_sizes[min];
        div_sizes[min]=div_sizes[max];
        div_sizes[max]=temp;

        div_update(divs[min],div_sizes[min],"blue");
        div_update(divs[max],div_sizes[max],"blue");
    }
    div_update(divs[min],div_sizes[min],"orange");
    div_update(divs[max],div_sizes[max],"orange");

    for(var i=1;i<array_size/2;i++)
    {
        for(var j=i;j<=len+(i-1);j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update
            if(div_sizes[j]<div_sizes[min])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[min],div_sizes[min], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[min];
                div_sizes[min]=temp;

                div_update(divs[j],div_sizes[j], "blue");//Height update
                div_update(divs[min],div_sizes[min], "orange");//Height update
            }
            div_update(divs[j],div_sizes[j], "yellow");
            if(div_sizes[j]>div_sizes[max])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[max],div_sizes[max], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[max];
                div_sizes[max]=temp;

                div_update(divs[j],div_sizes[j], "blue");//Height update
                div_update(divs[max],div_sizes[max], "orange");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color update
        }
        div_update(divs[min],div_sizes[min], "green");//Color update
        div_update(divs[max],div_sizes[max], "green");//Color update
        min++;
        max--;
        if (div_sizes[min] > div_sizes[max])
        { // arr[min] < arr[max]
        
            div_update(divs[min], div_sizes[min], "red");
            div_update(divs[max], div_sizes[max], "red");
        
            var temp = div_sizes[min];
            div_sizes[min] = div_sizes[max];
            div_sizes[max] = temp;
        
            div_update(divs[min], div_sizes[min], "blue");
            div_update(divs[max], div_sizes[max], "blue");
        }
        len -= 2;
    }
    div_update(divs[min],div_sizes[min], "green");//Color update
        div_update(divs[max],div_sizes[max], "green");//Color update
    enable_buttons();
}